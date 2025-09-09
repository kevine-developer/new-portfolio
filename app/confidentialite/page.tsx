import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, Shield, Eye, Database, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Politique de Confidentialité | Kevine.dev",
  description:
    "Politique de confidentialité et protection des données du portfolio de Kevine",
};

export default function ConfidentialitePage() {
  return (
    <main 
      className={`min-h-screen transition-all duration-500 bg-slate-950 text-white  relative overflow-hidden`}
    >
          <Section containerSize="md">
        
              <div className="mb-8">
                <Button variant="ghost" asChild className="mb-4">
                  <Link
                    href="/"
                    className="flex items-center text-slate-400 hover:text-white"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour au portfolio
                  </Link>
                </Button>

                <SectionHeader
                  title="Politique de Confidentialité"
                  subtitle="Comment nous protégeons et utilisons vos données"
                  centered={false}
                />

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="outline"
                    className="border-emerald-500/30 text-emerald-400"
                  >
                    <Shield className="w-3 h-3 mr-1" />
                    RGPD Compliant
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-blue-500/30 text-blue-400"
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    Transparence totale
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-purple-500/30 text-purple-400"
                  >
                    <Database className="w-3 h-3 mr-1" />
                    Données minimales
                  </Badge>
                </div>
              </div>

              <div className="space-y-8">
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <Database className="w-5 h-5 mr-2 text-emerald-400" />
                        1. Données collectées
                      </h2>
                      <div className="text-slate-300 space-y-3">
                        <p>
                          Ce site web collecte un minimum de données pour
                          fonctionner et s'améliorer :
                        </p>
                        <div className="bg-slate-800/50 rounded-lg p-4 space-y-2">
                          <h4 className="font-medium text-white">
                            Données automatiques :
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Adresse IP (anonymisée)</li>
                            <li>Type de navigateur et version</li>
                            <li>Pages visitées et temps passé</li>
                            <li>Résolution d'écran</li>
                            <li>Pays de provenance (approximatif)</li>
                          </ul>
                        </div>
                        <div className="bg-slate-800/50 rounded-lg p-4 space-y-2">
                          <h4 className="font-medium text-white">
                            Données volontaires :
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>
                              Nom et email (formulaire de contact uniquement)
                            </li>
                            <li>Message et sujet (formulaire de contact)</li>
                            <li>Préférences de thème (stockage local)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <Eye className="w-5 h-5 mr-2 text-blue-400" />
                        2. Utilisation des données
                      </h2>
                      <div className="text-slate-300 space-y-3">
                        <p>Vos données sont utilisées exclusivement pour :</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-slate-800/50 rounded-lg p-4">
                            <h4 className="font-medium text-white mb-2">
                               Analytics
                            </h4>
                            <p className="text-sm">
                              Comprendre comment améliorer l'expérience
                              utilisateur (pages populaires, temps de
                              chargement, etc.)
                            </p>
                          </div>
                          <div className="bg-slate-800/50 rounded-lg p-4">
                            <h4 className="font-medium text-white mb-2">
                               Contact
                            </h4>
                            <p className="text-sm">
                              Répondre à vos messages et questions concernant
                              une collaboration ou alternance
                            </p>
                          </div>
                          <div className="bg-slate-800/50 rounded-lg p-4">
                            <h4 className="font-medium text-white mb-2">
                               Performance
                            </h4>
                            <p className="text-sm">
                              Optimiser la vitesse et la stabilité du site selon
                              les appareils utilisés
                            </p>
                          </div>
                          <div className="bg-slate-800/50 rounded-lg p-4">
                            <h4 className="font-medium text-white mb-2">
                               Personnalisation
                            </h4>
                            <p className="text-sm">
                              Sauvegarder vos préférences (thème, langue) pour
                              votre prochaine visite
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <Settings className="w-5 h-5 mr-2 text-purple-400" />
                        3. Outils utilisés
                      </h2>
                      <div className="text-slate-300 space-y-4">
                        <div className="bg-slate-800/50 rounded-lg p-4">
                          <h4 className="font-medium text-white mb-2">
                             Google Analytics 4
                          </h4>
                          <p className="text-sm mb-2">
                            Analyse anonyme du trafic et du comportement des
                            visiteurs.
                          </p>
                          <p className="text-xs text-slate-400">
                            Configuration : IP anonymisée, pas de données
                            personnelles, rétention limitée à 14 mois.
                          </p>
                        </div>
                        <div className="bg-slate-800/50 rounded-lg p-4">
                          <h4 className="font-medium text-white mb-2">
                             Vercel Analytics
                          </h4>
                          <p className="text-sm mb-2">
                            Métriques de performance et de vitesse du site.
                          </p>
                          <p className="text-xs text-slate-400">
                            Configuration : Données agrégées uniquement, respect
                            RGPD.
                          </p>
                        </div>
                        <div className="bg-slate-800/50 rounded-lg p-4">
                          <h4 className="font-medium text-white mb-2">
                             Supabase (optionnel)
                          </h4>
                          <p className="text-sm mb-2">
                            Stockage sécurisé des messages de contact si activé.
                          </p>
                          <p className="text-xs text-slate-400">
                            Configuration : Chiffrement, serveurs EU,
                            suppression automatique après 1 an.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-emerald-400" />
                        4. Vos droits (RGPD)
                      </h2>
                      <div className="text-slate-300 space-y-3">
                        <p>
                          Conformément au RGPD, vous disposez des droits
                          suivants :
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-lg">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium text-white text-sm">
                                Droit d'accès
                              </h4>
                              <p className="text-xs text-slate-400">
                                Connaître les données collectées
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-lg">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium text-white text-sm">
                                Droit de rectification
                              </h4>
                              <p className="text-xs text-slate-400">
                                Corriger des informations erronées
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-lg">
                            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium text-white text-sm">
                                Droit d'effacement
                              </h4>
                              <p className="text-xs text-slate-400">
                                Supprimer vos données
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-lg">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium text-white text-sm">
                                Droit d'opposition
                              </h4>
                              <p className="text-xs text-slate-400">
                                Refuser le traitement
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mt-4">
                          <p className="text-sm">
                            <strong className="text-emerald-400">
                              Pour exercer vos droits :
                            </strong>
                            Envoyez un email à
                            <a
                              href="mailto:kevine.dev@gmail.com"
                              className="text-emerald-400 hover:underline"
                            >
                              yvesnarsonkevine@gmail.com
                            </a>
                            avec l'objet "RGPD - [Votre demande]"
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold text-white mb-3">
                        5. Cookies et stockage local
                      </h2>
                      <div className="text-slate-300 space-y-3">
                        <p>Ce site utilise un stockage minimal :</p>
                        <div className="bg-slate-800/50 rounded-lg p-4 space-y-3">
                          <div>
                            <h4 className="font-medium text-white">
                               Cookies essentiels
                            </h4>
                            <p className="text-sm text-slate-400">
                              Aucun cookie n'est déposé sans votre consentement
                              explicite.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-white">
                               Stockage local
                            </h4>
                            <p className="text-sm text-slate-400">
                              Préférences de thème stockées localement dans
                              votre navigateur. Vous pouvez les effacer à tout
                              moment.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-white">
                               Analytics
                            </h4>
                            <p className="text-sm text-slate-400">
                              Google Analytics utilise des cookies anonymes.
                              Vous pouvez les désactiver dans les paramètres de
                              votre navigateur.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold text-white mb-3">
                        6. Sécurité
                      </h2>
                      <div className="text-slate-300 space-y-3">
                        <p>Mesures de protection mises en place :</p>
                        <div className="grid md:grid-cols-3 gap-3">
                          <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                            <h4 className="font-medium text-white text-sm">
                              HTTPS
                            </h4>
                            <p className="text-xs text-slate-400">
                              Chiffrement SSL/TLS
                            </p>
                          </div>
                          <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                            <h4 className="font-medium text-white text-sm">
                              Headers
                            </h4>
                            <p className="text-xs text-slate-400">
                              Sécurité renforcée
                            </p>
                          </div>
                          <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                            <h4 className="font-medium text-white text-sm">
                              Validation
                            </h4>
                            <p className="text-xs text-slate-400">
                              Données vérifiées
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold text-white mb-3">
                        7. Contact et questions
                      </h2>
                      <div className="text-slate-300 space-y-3">
                        <p>
                          Pour toute question concernant cette politique de
                          confidentialité ou vos données personnelles :
                        </p>
                        <div className="bg-slate-800/50 rounded-lg p-4">
                          <p>
                            <strong>Email :</strong> yvesnarsonkevine@gmail.com
                          </p>
                          <p>
                            <strong>Objet :</strong> "Confidentialité - [Votre
                            question]"
                          </p>
                          <p>
                            <strong>Délai de réponse :</strong> 48h maximum
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-700">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                        <p className="text-sm text-slate-400">
                          Dernière mise à jour :{" "}
                          {new Date().toLocaleDateString("fr-FR")}
                        </p>
                        <p className="text-sm text-slate-400">
                          Version 1.0 - Conforme RGPD
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
           
          </Section>
      </main>
  );
}
