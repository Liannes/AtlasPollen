# Образ
FROM node:20.9.0-alpine3.17 as build

# Копирование
WORKDIR /app/frontend
COPY ./frontend/ ./

# Глобальные переменные
# ARG API_KEY_DADATA
# ARG API_AXSIOS
RUN npm run build

# Запуск nginx
FROM nginx:stable-alpine
COPY --from=build /app/frontend/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]