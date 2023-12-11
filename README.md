# greenpath

Projekt zum Modul IPWA01 an der IU. Die (fiktive) Non-Profit Organisation Green Path hat eine Web-App ins Leben gerufen, die CO2-Emissionsdaten enthält. Mit diesen soll der CO2 Fußabdruck verschiedener Unternehmen weltweit (fiktiv) dargestellt werden

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://vitejs.dev/guide/cli.html).

## SSL Configuration

This project uses a self-signed SSL certificate for demo purposes. Cloning this repository requires you to create a self-signed SSL certificate in order to start the server.

```
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key-unencrypted.pem -out cert.pem
```

When you first access the application, your browser may display a security warning.

Here's how to bypass the warning on some common browsers:

### Chrome:
1. Click on "Advanced".
2. Click on "Proceed to localhost (unsafe)".

### Firefox:
1. Click on "Advanced".
2. Click on "Add Exception" and then "Confirm Security Exception".

### Safari:
1. Click on "visit this website".
2. Enter your password if prompted.
