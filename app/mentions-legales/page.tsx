import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Mentions Légales | Kevine.dev",
  description:
    "Mentions légales du portfolio de Kevine, développeur fullstack JS",
};

/**
 * Renders the legal notice page for the portfolio website, displaying legal information, hosting details, intellectual property rights, liability disclaimers, data collection practices, and applicable law.
 *
 * The page includes a navigation button to return to the homepage, a section header, and a card containing the structured legal content. The last update date is shown at the bottom.
 */
export default function MentionsLegalesPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen relative overflow-hidden  transition-all duration-500">
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
            title="Mentions Légales"
            subtitle="Informations légales concernant ce site web"
            centered={false}
          />
        </div>

        <div className="space-y-8">
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="p-6 space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  1. Informations générales
                </h2>
                <div className="text-slate-300 space-y-2">
                  <p>
                    <strong>Nom :</strong> Yves
                  </p>
                  <p>
                    <strong>Statut :</strong> Étudiant développeur
                  </p>
                  <p>
                    <strong>Email :</strong> yvesnarsonkevine@gmail.com
                  </p>
                  <p>
                    <strong>Site web :</strong>{" "}
                    https://kevine-portfolio.vercel.app/
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  2. Hébergement
                </h2>
                <div className="text-slate-300 space-y-2">
                  <p>
                    <strong>Hébergeur :</strong> Vercel Inc.
                  </p>
                  <p>
                    <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA
                    91789, États-Unis
                  </p>
                  <p>
                    <strong>Site web :</strong> https://vercel.com
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  3. Propriété intellectuelle
                </h2>
                <div className="text-slate-300 space-y-3">
                  <p>
                    L'ensemble de ce site web, y compris les textes, images,
                    codes sources, et design, est la propriété exclusive de
                    Kevine, sauf mention contraire.
                  </p>
                  <p>
                    Toute reproduction, distribution, modification, adaptation,
                    retransmission ou publication de ces différents éléments est
                    strictement interdite sans l'accord écrit de Kevine.
                  </p>
                  <p>
                    Les marques et logos mentionnés sur ce site appartiennent à
                    leurs propriétaires respectifs.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  4. Responsabilité
                </h2>
                <div className="text-slate-300 space-y-3">
                  <p>
                    Les informations contenues sur ce site sont aussi précises
                    que possible et le site est périodiquement remis à jour,
                    mais peut toutefois contenir des inexactitudes, des
                    omissions ou des lacunes.
                  </p>
                  <p>
                    Kevine ne pourra en aucun cas être tenu responsable de tout
                    dommage de quelque nature que ce soit résultant de
                    l'interprétation ou de l'utilisation des informations et/ou
                    documents disponibles sur ce site.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  5. Liens hypertextes
                </h2>
                <div className="text-slate-300 space-y-3">
                  <p>
                    Les liens hypertextes mis en place dans le cadre du présent
                    site web en direction d'autres ressources présentes sur le
                    réseau Internet ne sauraient engager la responsabilité de
                    Kevine.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  6. Collecte de données
                </h2>
                <div className="text-slate-300 space-y-3">
                  <p>
                    Ce site peut collecter des données anonymes de navigation à
                    des fins d'amélioration de l'expérience utilisateur via
                    Google Analytics.
                  </p>
                  <p>
                    Pour plus d'informations sur la collecte et l'utilisation
                    des données, consultez notre{" "}
                    <Link
                      href="/confidentialite"
                      className="text-emerald-400 hover:underline"
                    >
                      politique de confidentialité
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  7. Droit applicable
                </h2>
                <div className="text-slate-300 space-y-3">
                  <p>
                    Le présent site web et les présentes mentions légales sont
                    régis par le droit français. En cas de litige, les tribunaux
                    français seront seuls compétents.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700">
                <p className="text-sm text-slate-400">
                  Dernière mise à jour :{" "}
                  {new Date().toLocaleDateString("fr-FR")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </main>
  );
}
