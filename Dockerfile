FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build && npm run export

FROM node:18-alpine AS runner

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/out /app

EXPOSE 3000
CMD ["serve", "-s", ".", "-l", "3000"]
