FROM golang:latest as builder

WORKDIR /app

COPY app/ .

RUN go mod download

RUN CGO_ENABLED=0 GOOS=linux go build -o myapp

FROM scratch

WORKDIR /app

COPY --from=builder /app/myapp .

EXPOSE 8080

CMD ["./myapp"]
