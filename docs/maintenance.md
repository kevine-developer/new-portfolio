# 🔧 Guide de Maintenance

## 📋 Checklist Quotidienne

### Vérifications Automatiques
\`\`\`bash
#!/bin/bash
# scripts/daily-check.sh

echo "🔍 Vérification quotidienne du portfolio..."

# 1. Statut du site
echo "📡 Vérification du statut..."
curl -s -o /dev/null -w "%{http_code}" https://kevine-portfolio.vercel.app/
if [ $? -eq 0 ]; then
    echo "✅ Site accessible"
else
    echo "❌ Site inaccessible"
    # Envoyer une alerte
fi

# 2. Performance
echo "⚡ Test de performance..."
npx lighthouse https://kevine-portfolio.vercel.app/ --only-categories=performance --quiet

# 3. Erreurs JavaScript
echo "🐛 Vérification des erreurs..."
npm run lint --silent

# 4. Sécurité
echo "🛡️ Audit de sécurité..."
npm audit --audit-level moderate

echo "✅ Vérification terminée"
\`\`\`

### Dashboard de Monitoring

\`\`\`typescript
// components/admin/monitoring-dashboard.tsx
"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Metrics {
  uptime: number
  responseTime: number
  errorRate: number
  visitors: number
}

export function MonitoringDashboard() {
  const [metrics, setMetrics] = useState<Metrics | null>(null)
  
  useEffect(() => {
    // Récupérer les métriques depuis l'API
    fetchMetrics().then(setMetrics)
  }, [])
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Uptime</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-500">
            {metrics?.uptime}%
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Temps de Réponse</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {metrics?.responseTime}ms
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Taux d'Erreur</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-500">
            {metrics?.errorRate}%
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Visiteurs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-500">
            {metrics?.visitors}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

async function fetchMetrics(): Promise<Metrics> {
  // Intégration avec votre service de monitoring
  const response = await fetch('/api/metrics')
  return response.json()
}
\`\`\`

## 📊 Checklist Hebdomadaire

### Mise à Jour des Dépendances
\`\`\`bash
#!/bin/bash
# scripts/weekly-update.sh

echo "📦 Mise à jour hebdomadaire..."

# 1. Vérifier les mises à jour disponibles
echo "🔍 Vérification des mises à jour..."
npm outdated

# 2. Mettre à jour les dépendances mineures
echo "⬆️ Mise à jour des dépendances mineures..."
npm update

# 3. Vérifier les vulnérabilités
echo "🛡️ Audit de sécurité..."
npm audit fix

# 4. Tester après mise à jour
echo "🧪 Tests après mise à jour..."
npm run build
npm run test

# 5. Commit si tout va bien
if [ $? -eq 0 ]; then
    git add package*.json
    git commit -m "chore: mise à jour hebdomadaire des dépendances"
    echo "✅ Mise à jour terminée et commitée"
else
    echo "❌ Erreur lors des tests, annulation"
    git checkout -- package*.json
fi
\`\`\`

### Sauvegarde des Données
\`\`\`bash
#!/bin/bash
# scripts/backup.sh

BACKUP_DIR="backups/$(date +%Y%m%d)"
mkdir -p $BACKUP_DIR

echo "💾 Sauvegarde en cours..."

# 1. Sauvegarde Supabase
if [ ! -z "$SUPABASE_PROJECT_ID" ]; then
    echo "🗄️ Sauvegarde de la base de données..."
    supabase db dump --file "$BACKUP_DIR/database.sql"
fi

# 2. Sauvegarde des assets
echo "🖼️ Sauvegarde des assets..."
tar -czf "$BACKUP_DIR/assets.tar.gz" public/

# 3. Sauvegarde de la configuration
echo "⚙️ Sauvegarde de la configuration..."
cp .env.example "$BACKUP_DIR/"
cp package.json "$BACKUP_DIR/"
cp next.config.mjs "$BACKUP_DIR/"

# 4. Upload vers le cloud (optionnel)
if [ ! -z "$BACKUP_CLOUD_URL" ]; then
    echo "☁️ Upload vers le cloud..."
    rsync -av "$BACKUP_DIR/" "$BACKUP_CLOUD_URL"
fi

echo "✅ Sauvegarde terminée dans $BACKUP_DIR"
\`\`\`

## 🔄 Checklist Mensuelle

### Audit Complet
\`\`\`bash
#!/bin/bash
# scripts/monthly-audit.sh

echo "🔍 Audit mensuel complet..."

# 1. Audit de performance
echo "⚡ Audit de performance..."
npx lighthouse https://kevine-portfolio.vercel.app/ --output html --output-path reports/lighthouse-$(date +%Y%m).html

# 2. Audit de sécurité
echo "🛡️ Audit de sécurité..."
npx snyk test --json > reports/security-$(date +%Y%m).json

# 3. Audit d'accessibilité
echo "♿ Audit d'accessibilité..."
npx axe-cli https://kevine-portfolio.vercel.app/ --save reports/accessibility-$(date +%Y%m).json

# 4. Audit SEO
echo "🔍 Audit SEO..."
npx lighthouse https://kevine-portfolio.vercel.app/ --only-categories=seo --output json --output-path reports/seo-$(date +%Y%m).json

# 5. Analyse du bundle
echo "📦 Analyse du bundle..."
npm run analyze

# 6. Génération du rapport
echo "📊 Génération du rapport..."
node scripts/generate-monthly-report.js

echo "✅ Audit mensuel terminé"
\`\`\`

### Nettoyage et Optimisation
\`\`\`bash
#!/bin/bash
# scripts/cleanup.sh

echo "🧹 Nettoyage mensuel..."

# 1. Nettoyer le cache Next.js
echo "🗑️ Nettoyage du cache..."
rm -rf .next/cache/*

# 2. Nettoyer les logs
echo "📝 Nettoyage des logs..."
find logs/ -name "*.log" -mtime +30 -delete

# 3. Nettoyer les sauvegardes anciennes
echo "💾 Nettoyage des anciennes sauvegardes..."
find backups/ -type d -mtime +90 -exec rm -rf {} +

# 4. Optimiser les images
echo "🖼️ Optimisation des images..."
npx imagemin public/images/* --out-dir=public/images/

# 5. Analyser l'espace disque
echo "💽 Analyse de l'espace disque..."
du -sh .next node_modules public

echo "✅ Nettoyage terminé"
\`\`\`

## 🚨 Alertes et Notifications

### Configuration des Alertes
\`\`\`typescript
// lib/alerts.ts
interface AlertConfig {
  type: 'email' | 'slack' | 'webhook'
  threshold: number
  message: string
}

const ALERT_CONFIGS: AlertConfig[] = [
  {
    type: 'email',
    threshold: 95, // Uptime < 95%
    message: 'Site indisponible détecté'
  },
  {
    type: 'slack',
    threshold: 3000, // Response time > 3s
    message: 'Performance dégradée'
  },
  {
    type: 'webhook',
    threshold: 5, // Error rate > 5%
    message: 'Taux d\'erreur élevé'
  }
]

export async function checkAndAlert(metrics: Metrics) {
  for (const config of ALERT_CONFIGS) {
    if (shouldAlert(metrics, config)) {
      await sendAlert(config)
    }
  }
}

function shouldAlert(metrics: Metrics, config: AlertConfig): boolean {
  switch (config.type) {
    case 'email':
      return metrics.uptime < config.threshold
    case 'slack':
      return metrics.responseTime > config.threshold
    case 'webhook':
      return metrics.errorRate > config.threshold
    default:
      return false
  }
}

async function sendAlert(config: AlertConfig) {
  switch (config.type) {
    case 'email':
      await sendEmail({
        to: 'kevine.dev@gmail.com',
        subject: '🚨 Alerte Portfolio',
        body: config.message
      })
      break
    case 'slack':
      await sendSlackMessage({
        channel: '#alerts',
        message: config.message
      })
      break
    case 'webhook':
      await fetch(process.env.ALERT_WEBHOOK_URL!, {
        method: 'POST',
        body: JSON.stringify({ message: config.message })
      })
      break
  }
}
\`\`\`

## 📈 Métriques de Maintenance

### KPIs à Suivre
| Métrique | Cible | Fréquence |
|----------|-------|-----------|
| **Uptime** | > 99.9% | Temps réel |
| **MTTR** | < 5 min | Par incident |
| **Déploiements** | 0 rollback | Par semaine |
| **Vulnérabilités** | 0 critique | Par jour |
| **Performance** | > 90 Lighthouse | Par semaine |

### Tableau de Bord
\`\`\`typescript
// components/admin/maintenance-dashboard.tsx
export function MaintenanceDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard
          title="Uptime"
          value="99.98%"
          trend="+0.02%"
          color="green"
        />
        <MetricCard
          title="MTTR"
          value="3.2 min"
          trend="-1.8 min"
          color="blue"
        />
        <MetricCard
          title="Déploiements"
          value="12"
          trend="+2"
          color="purple"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceChart />
        <ErrorRateChart />
      </div>
      
      <RecentIncidents />
    </div>
  )
}
\`\`\`

## 🔧 Outils de Maintenance

### Scripts Utiles
\`\`\`json
// package.json
{
  "scripts": {
    "maintenance:daily": "bash scripts/daily-check.sh",
    "maintenance:weekly": "bash scripts/weekly-update.sh",
    "maintenance:monthly": "bash scripts/monthly-audit.sh",
    "maintenance:backup": "bash scripts/backup.sh",
    "maintenance:cleanup": "bash scripts/cleanup.sh",
    "maintenance:health": "node scripts/health-check.js",
    "maintenance:report": "node scripts/generate-report.js"
  }
}
\`\`\`

### Automatisation avec GitHub Actions
\`\`\`yaml
# .github/workflows/maintenance.yml
name: Maintenance

on:
  schedule:
    - cron: '0 2 * * *' # Tous les jours à 2h
    - cron: '0 3 * * 1' # Tous les lundis à 3h
    - cron: '0 4 1 * *' # Le 1er de chaque mois à 4h

jobs:
  daily-check:
    if: github.event.schedule == '0 2 * * *'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm run maintenance:daily

  weekly-update:
    if: github.event.schedule == '0 3 * * 1'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm run maintenance:weekly

  monthly-audit:
    if: github.event.schedule == '0 4 1 * *'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm run maintenance:monthly
\`\`\`

---

*Guide de maintenance v1.0 - Dernière mise à jour : $(date)*
