#!/bin/bash

# Check if .env.example exists
if [ -f ".env.example" ]; then
  # Copy .env.example to .env
  cp .env.example .env.local
  echo "Created .env file from .env.example"
else
  echo "Error: .env.example file not found!"
  exit 1
fi