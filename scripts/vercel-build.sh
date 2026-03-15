#!/usr/bin/env sh
set -eu

sanitize_url() {
  raw_value="$1"
  cleaned_value="$raw_value"

  case "$cleaned_value" in
    DATABASE_URL=*)
      cleaned_value=${cleaned_value#DATABASE_URL=}
      ;;
  esac

  case "$cleaned_value" in
    \"*\")
      cleaned_value=${cleaned_value#\"}
      cleaned_value=${cleaned_value%\"}
      ;;
  esac

  printf '%s' "$cleaned_value"
}

validate_url_protocol() {
  value_to_validate="$1"
  variable_name="$2"

  case "$value_to_validate" in
    postgresql://*|postgres://*)
      ;;
    *)
      echo "Error: $variable_name must start with postgresql:// or postgres://"
      echo "Tip: In Vercel, set $variable_name to the raw URL only (no quotes, no variable name prefix)."
      exit 1
      ;;
  esac
}

read_env_value_from_file() {
  env_file="$1"
  env_key="$2"

  if [ ! -f "$env_file" ]; then
    return 1
  fi

  line=$(grep -E "^${env_key}=" "$env_file" | head -n 1 || true)
  if [ -z "$line" ]; then
    return 1
  fi

  printf '%s' "${line#*=}"
}

if [ -z "${DATABASE_URL:-}" ]; then
  DATABASE_URL="$(read_env_value_from_file ".env" "DATABASE_URL" || true)"
fi

if [ -z "${DATABASE_URL:-}" ]; then
  echo "Error: DATABASE_URL is not set."
  echo "Tip: Add DATABASE_URL in Vercel Project Settings > Environment Variables."
  exit 1
fi

export DATABASE_URL="$(sanitize_url "$DATABASE_URL")"
validate_url_protocol "$DATABASE_URL" "DATABASE_URL"

echo "Generating Prisma client..."
npx prisma generate

if [ "${VERCEL:-0}" = "1" ] && [ "${VERCEL_ENV:-}" = "production" ]; then
  echo "Production deploy detected. Applying Prisma migrations..."
  npx prisma migrate deploy
else
  echo "Skipping prisma migrate deploy (VERCEL=${VERCEL:-0}, VERCEL_ENV=${VERCEL_ENV:-unset})."
fi

echo "Building Next.js app..."
npx next build
