# Portfolio Kevine - PWA avec CMS Headless

## 🚀 Configuration Supabase (Optionnelle)

Le portfolio fonctionne en mode **fallback** avec des données statiques si Supabase n'est pas configuré.

### Configuration CMS Dynamique

1. **Créer un projet Supabase** : [supabase.com](https://supabase.com)

2. **Configurer les variables d'environnement** :
\`\`\`bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
\`\`\`

3. **Exécuter les scripts SQL** :
   - Copier le contenu de `scripts/create-database-schema.sql`
   - Coller dans l'éditeur SQL de Supabase
   - Exécuter le script
   - Répéter avec `scripts/seed-database.sql`

4. **Générer les types TypeScript** :
\`\`\`bash
npm run db:types
\`\`\`

## 🔄 Modes de Fonctionnement

### Mode Fallback (Par défaut)
- ✅ Fonctionne sans configuration
- ✅ Données statiques intégrées
- ✅ Performance optimale
- ❌ Contenu non modifiable

### Mode CMS (Avec Supabase)
- ✅ Contenu dynamique modifiable
- ✅ Interface d'administration
- ✅ Cache intelligent
- ✅ Types TypeScript sûrs

## 📊 Gestion du Contenu

### Interface Supabase
- **Table Editor** : Modification directe des données
- **SQL Editor** : Requêtes personnalisées
- **API Docs** : Documentation automatique

### Données Gérées
- **Compétences** : Niveaux, catégories, icônes
- **Projets** : Descriptions, technologies, liens
- **Parcours** : Timeline professionnelle
- **Témoignages** : Avis clients/formateurs
- **Paramètres** : Textes configurables

## 🛠️ Développement

\`\`\`bash
# Installation
npm install

# Développement
npm run dev

# Build
npm run build

# Types Supabase (si configuré)
npm run db:types
\`\`\`

## 📱 PWA Features

- ✅ Installation native
- ✅ Mode hors ligne
- ✅ Notifications push
- ✅ Cache intelligent
- ✅ Raccourcis dynamiques

## 🔧 Architecture

\`\`\`
├── lib/
│   ├── supabase.ts      # Configuration Supabase
│   └── cms.ts           # Logique CMS avec fallback
├── hooks/
│   └── use-cms-data.ts  # Hooks réactifs pour les données
├── types/
│   ├── database.ts      # Types générés depuis Supabase
│   └── cms.ts           # Types métier
├── scripts/
│   ├── create-database-schema.sql
│   └── seed-database.sql
└── components/
    └── ui/
        └── cms-status.tsx  # Indicateur de statut CMS
\`\`\`

## 🚨 Gestion d'Erreurs

- **Variables manquantes** : Fallback automatique
- **Erreurs réseau** : Cache + données statiques
- **Données corrompues** : Validation + fallback
- **Timeout** : Retry automatique

## 🎯 Avantages

1. **Résilience** : Fonctionne toujours, même sans CMS
2. **Performance** : Cache intelligent + CDN
3. **Flexibilité** : Basculement transparent
4. **Sécurité** : Validation côté client et serveur
5. **DX** : Types TypeScript complets
