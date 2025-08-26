# Portfolio Kevine – PWA Moderne avec CMS Headless

Un portfolio Next.js optimisé pour la performance, capable de fonctionner avec ou sans CMS, grâce à une intégration facultative de **Supabase**.

---

## Modes de Fonctionnement

### Mode *Fallback* (par défaut)

> [!TIP] Idéal pour un déploiement rapide sans configuration externe.

- Données statiques intégrées  
- Aucune configuration nécessaire  
- Temps de chargement optimal  
- Contenu non modifiable dynamiquement  

### Mode *CMS Headless* (via Supabase)

> [!IMPORTANT] Nécessite une configuration Supabase.

- Contenu éditable depuis l'interface Supabase  
- Support du cache et des données dynamiques  
- Génération automatique des types TypeScript  
- Intégration à l’interface d’administration Supabase  

---

## Configuration de Supabase (Optionnelle)

1. **Créer un projet** : [https://supabase.com](https://supabase.com)  
2. **Configurer `.env.local`** :

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co  
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key  
```

3.**Initialiser la base de données** :
- Copier le contenu de `scripts/create-database-schema.sql`  
- Le coller dans l’éditeur SQL de Supabase  
- Lancer l'exécution  
- Répéter avec `scripts/seed-database.sql` pour les données d’exemple  

4.**Générer les types TypeScript** :

```bash
npm run db:types
```

---

## Contenu Géré (via Supabase)

- **Compétences** : nom, catégorie, niveau, icône  
- **Projets** : titre, description, techno, lien  
- **Parcours** : timeline professionnelle  
- **Témoignages** : clients, formateurs, partenaires  
- **Paramètres** : textes personnalisables du site  

---

## Développement

```bash
# Installation des dépendances
npm install

# Démarrage du serveur local
npm run dev

# Build production
npm run build

# Regénération des types Supabase
npm run db:types
```

---

## Fonctionnalités PWA

- Installation sur appareil (mobile ou desktop)  
- Mode hors ligne grâce au cache  
- Notifications push (si activées)  
- Raccourcis applicatifs dynamiques  
- Mécanismes de fallback intelligents  

---

## Architecture

```
├── lib/
│   ├── supabase.ts         # Client Supabase
│   └── cms.ts              # Logique fallback / CMS
├── hooks/
│   └── use-cms-data.ts     # Hook de récupération de contenu
├── types/
│   ├── database.ts         # Types Supabase (auto-générés)
│   └── cms.ts              # Types fonctionnels métiers
├── scripts/
│   ├── create-database-schema.sql
│   └── seed-database.sql
└── components/
    └── ui/
        └── cms-status.tsx  # Affichage du statut CMS (fallback ou dynamique)
```

---

## Gestion des Erreurs

> [!WARNING] Le système bascule automatiquement sur les données statiques si une erreur survient.

- Variables d’environnement manquantes : mode fallback  
- Erreurs réseau : repli sur données en cache  
- Données invalides : validation + fallback  
- Timeout ou latence excessive : retry automatique  

---

## Pourquoi ce choix technique ?

> [!NOTE] Ce portfolio n’est pas juste une vitrine. Il démontre un équilibre entre **résilience**, **flexibilité**, et **expérience développeur**.

1. **Résilience** : Fonctionne sans backend  
2. **Performance** : Données locales + cache  
3. **Flexibilité** : CMS activable à tout moment  
4. **Sécurité** : Validation et typage fort  
5. **Developer Experience** : Types générés, hooks modulaires, architecture claire
