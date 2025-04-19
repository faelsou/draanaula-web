
#!/bin/bash
set -e

echo "Creating draanapaula namespace..."
kubectl apply -f k8s/namespace.yaml

echo "Deploying application..."
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
kubectl apply -f k8s/hpa.yaml

echo "Application deployed successfully!"
echo "Access the website at: https://draanapaula.com.br"
