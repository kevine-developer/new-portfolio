-- Insertion des données initiales

-- Compétences
INSERT INTO skills (name, level, color, icon, category, order_index) VALUES
('React', 95, 'from-blue-400 to-blue-600', '⚛️', 'frontend', 1),
('Next.js', 90, 'from-gray-400 to-gray-600', '▲', 'frontend', 2),
('TypeScript', 85, 'from-blue-500 to-blue-700', '📘', 'frontend', 3),
('Tailwind CSS', 90, 'from-cyan-400 to-cyan-600', '🎨', 'frontend', 4),
('PHP/Laravel', 80, 'from-red-400 to-red-600', '🔧', 'backend', 5),
('Node.js', 75, 'from-green-400 to-green-600', '🟢', 'backend', 6),
('Supabase', 85, 'from-emerald-400 to-emerald-600', '🗄️', 'backend', 7),
('React Native', 75, 'from-purple-400 to-purple-600', '📱', 'mobile', 8),
('UX/UI Design', 80, 'from-pink-400 to-pink-600', ' ', 'tools', 9),
('Éco-conception', 90, 'from-green-500 to-emerald-500', '🌱', 'tools', 10),
('Accessibilité', 85, 'from-indigo-400 to-indigo-600', '♿', 'tools', 11),
('Git/GitHub', 85, 'from-gray-500 to-gray-700', '🔀', 'tools', 12);

-- Projets
INSERT INTO projects (slug, title, description, long_description, tech, type, status, color, github_url, demo_url, metrics, is_featured, order_index) VALUES
('easytri', 'Easytri', 'Application mobile de tri sélectif avec IA', 'Application mobile complète développée en React Native avec reconnaissance d''objets par IA, géolocalisation des points de collecte, et système de gamification pour encourager le tri sélectif. Intégration d''une base de données Supabase et d''APIs de géolocalisation.', '["React Native", "Supabase", "TensorFlow.js", "Expo", "TypeScript"]', 'Production', '🚀 En production', 'from-emerald-500 to-teal-600', 'https://github.com/kevine/easytri', 'https://easytri.app', '5k+ utilisateurs actifs', true, 1),
('telolabz', 'TeloLabz - Missions Freelance', 'Développement d''applications sur mesure', 'Série de projets freelance incluant des sites e-commerce, applications web, et APIs. Développement fullstack avec Laravel/PHP côté backend et React/Next.js côté frontend. Gestion complète des projets de la conception à la livraison.', '["Next.js", "Laravel", "MySQL", "Stripe", "Tailwind CSS"]', 'Freelance', '💼 15+ projets livrés', 'from-purple-500 to-indigo-600', 'https://github.com/kevine/telolabz-projects', 'https://telolabz.com', '15+ clients satisfaits', true, 2),
('devengalere', 'DevEnGalère', 'Contenu tech humoristique sur les réseaux', 'Création de contenu éducatif et humoristique sur le développement web via TikTok et Instagram. Vulgarisation de concepts techniques complexes avec une approche décalée.', '["Next.js", "MDX", "Vercel", "Figma", "Premiere Pro"]', 'Personnel', '🔥 10k+ followers', 'from-yellow-500 to-orange-600', 'https://github.com/kevine/devengalere', 'https://devengalere.fr', '10k+ followers, 500k+ vues', true, 3);

-- Timeline
INSERT INTO timeline_items (date_range, title, company, description, type, status, icon, order_index) VALUES
('Oct 2025 - Avril 2027', 'Concepteur Développeur d''Applications', 'Simplon', 'Formation RNCP 6 en alternance - Spécialisation développement fullstack JavaScript', 'formation', '🎯 En cours', '🎓', 1),
('2024', 'Développeur Web - RNCP 5', 'OpenClassrooms', 'Formation certifiante validée avec mention. Projets React, Node.js, et bases de données.', 'formation', '✅ Validé avec mention', '📚', 2),
('2024', 'Développeur Freelance', 'TeloLabz & Clients divers', 'Développement d''applications web et mobile sur mesure. Gestion de projets en autonomie complète.', 'experience', '💼 15+ projets réalisés', '💻', 3),
('2024', 'Lead Developer', 'Easytri (Projet pro)', 'Conception et développement complet d''une app mobile de tri sélectif avec IA.', 'experience', '🚀 5k+ utilisateurs', '📱', 4),
('2023 - Présent', 'Créateur de Contenu Tech', 'DevEnGalère', 'Création de contenu éducatif et humoristique sur le développement web.', 'projet', '🔥 10k+ followers', '🎬', 5);

-- Témoignages
INSERT INTO testimonials (name, role, company, content, order_index) VALUES
('Sarah Martin', 'Formatrice OpenClassrooms', 'OpenClassrooms', 'Kevine a montré une progression remarquable et une capacité d''autonomie exceptionnelle. Ses projets témoignent d''une vraie compréhension des enjeux techniques et UX.', 1),
('Thomas Dubois', 'CTO', 'TeloLabz', 'Collaboration parfaite sur nos projets. Kevine livre toujours dans les temps avec un code propre et bien documenté. Son approche éco-responsable est un vrai plus.', 2),
('Marie Leroy', 'Product Owner', 'Easytri', 'Kevine a su transformer notre vision en une app fonctionnelle et intuitive. Son expertise technique et sa créativité ont été déterminantes pour le succès du projet.', 3);

-- Liens sociaux
INSERT INTO social_links (name, url, icon, color, order_index) VALUES
('GitHub', 'https://github.com/gastsar', 'Github', 'hover:text-gray-400', 1),
('LinkedIn', 'https://www.linkedin.com/in/yvesnarsonkevine', 'Linkedin', 'hover:text-blue-400', 2),
('TikTok', 'https://tiktok.com/@dev_en_galere', 'Music', 'hover:text-pink-400', 3),
('Instagram', 'https://instagram.com/dev_en_galere', 'Instagram', 'hover:text-purple-400', 4),
('Email', 'mailto:yvesnarsonkevine@gmail.com', 'Mail', 'hover:text-emerald-400', 5);

-- Paramètres du site
INSERT INTO site_settings (key, value, description) VALUES
('hero_typing_texts', '["Développeur Fullstack JS", "Créateur DevEnGalère", "Étudiant CDA chez Simplon", "Passionné d''éco-conception", "Prêt pour l''alternance"]', 'Textes animés dans le hero'),
('hero_title', '"Salut, je suis Kevine"', 'Titre principal du hero'),
('hero_description', '"Je crée des applications web et mobile modernes et éco-conçues. Passionné par le code propre, l''UX et l''humour tech via DevEnGalère 🚀"', 'Description du hero'),
('contact_email', '"kevine.dev@gmail.com"', 'Email de contact principal'),
('availability_date', '"Octobre 2025"', 'Date de disponibilité'),
('location', '"France • Remote OK"', 'Localisation'),
('devengalere_stats', '{"followers": "10k+", "views": "500k+", "videos": "50+"}', 'Statistiques DevEnGalère');

-- Critères de recherche d'alternance
INSERT INTO alternance_search_criteria (icon, label, value, color, order_index) VALUES
('Briefcase', 'Poste', 'Développeur Fullstack JS', 'text-emerald-400', 1),
('Clock', 'Rythme', '3 semaines entreprise / 1 semaine école', 'text-blue-400', 2),
('Calendar', 'Durée', '12 mois (Oct 2025 - Oct 2026)', 'text-purple-400', 3),
('MapPin', 'Lieu', 'France • Remote friendly', 'text-yellow-400', 4),
('GraduationCap', 'Formation', 'CDA RNCP 6 chez Simplon', 'text-pink-400', 5);

-- Forces/Atouts de l'alternant
INSERT INTO alternance_strengths (icon, label, value, color, order_index) VALUES
('Star', 'Autonomie', 'Projets menés de A à Z', 'text-emerald-400', 1),
('Rocket', 'Créativité', 'Solutions innovantes et éco-conçues', 'text-blue-400', 2),
('🔧', 'Polyvalence', 'Stack complète maîtrisée', 'text-purple-400', 3),
('🌱', 'Éco-conception', 'Développement durable et responsable', 'text-green-400', 4),
('😊', 'Humain', 'Esprit d''équipe et bonne humeur', 'text-yellow-400', 5);