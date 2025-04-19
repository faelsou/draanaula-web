
#!/bin/bash
set -e

echo "Creating monitoring namespace..."
kubectl apply -f monitoring/monitoring-namespace.yaml

echo "Deploying Prometheus..."
kubectl apply -f monitoring/prometheus-rbac.yaml
kubectl apply -f monitoring/prometheus-pvc.yaml
kubectl apply -f monitoring/prometheus-configmap.yaml
kubectl apply -f monitoring/prometheus-deployment.yaml
kubectl apply -f monitoring/prometheus-service.yaml

echo "Deploying Grafana..."
kubectl apply -f monitoring/grafana-pvc.yaml
kubectl apply -f monitoring/grafana-secret.yaml
kubectl apply -f monitoring/grafana-deployment.yaml
kubectl apply -f monitoring/grafana-service.yaml
kubectl apply -f monitoring/grafana-ingress.yaml

echo "Monitoring stack deployed successfully!"
echo "Access Grafana at: https://grafana.draanapaula.com.br"
