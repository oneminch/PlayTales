FROM node:20-alpine
WORKDIR /usr/src/app
RUN npm install -g pnpm@latest
COPY package.json pnpm-lock* ./
RUN pnpm install
COPY . .
RUN pnpm run build
EXPOSE 8888
CMD ["/bin/sh", "-c", "pnpm run start && pnpm dlx prisma db push"]
