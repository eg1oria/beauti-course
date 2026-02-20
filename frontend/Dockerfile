FROM node:20-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci  # убрать --only=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.* ./
EXPOSE 3000
CMD ["npx", "next", "start"]