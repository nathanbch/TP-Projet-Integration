# 🚀 Projet CI/CD avec Docker, GitHub Actions et Azure

## 📌 Objectif

Mettre en place une pipeline CI/CD complète permettant de :
- Tester une application
- Construire une image Docker
- Publier sur Docker Hub
- Déployer automatiquement sur une VM Azure

---

## 🧱 Technologies utilisées

- GitHub Actions (CI/CD)
- Docker & Docker Hub
- Microsoft Azure (VM Linux)
- Node.js (application)
- SSH pour le déploiement

---

## ⚙️ Pipeline CI/CD

La pipeline se déclenche automatiquement à chaque push sur la branche `main`.

### Étapes :

1. Tests
2. Build Docker
3. Push Docker Hub
4. Déploiement sur Azure

---

## 🔐 Secrets GitHub

- DOCKERHUB_USERNAME
- DOCKERHUB_TOKEN
- VM_HOST
- VM_USER
- VM_PASSWORD

---

## 🐳 Docker Hub

Image : nathanbch/git-ci-cd-tp:latest

---

## ☁️ VM Azure

IP : http://20.199.77.73:3000

---

## ▶️ Commandes de déploiement

docker pull nathanbch/git-ci-cd-tp:latest
docker stop myapp || true
docker rm myapp || true
docker run -d -p 3000:3000 --name myapp nathanbch/git-ci-cd-tp:latest

---

## 🧪 Vérification

docker ps
curl http://localhost:3000

---

## ✅ Résultat

Bienvenue sur mon application CI/CD

---

## 👨‍💻 Auteur

Nathan Bouche
