#!/usr/bin/env sh
set -eu

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
