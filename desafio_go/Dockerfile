FROM golang:1.18-alpine AS builder

WORKDIR /app

COPY fullcycle .

FROM scratch

WORKDIR /app

COPY --from=builder /app .

ENTRYPOINT ["./fullcycle"]