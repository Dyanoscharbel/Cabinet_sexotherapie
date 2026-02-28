import Image from "next/image";

const articles = [
  {
    tag: "Introduction",
    title: "Comprendre la sexothérapie holistique aujourd'hui",
    excerpt:
      "La sexothérapie est une approche thérapeutique spécialisée qui aide les individus et les couples à explorer et résoudre des problématiques liées à leur vie intime. Elle combine écoute, dialogue et exercices pratiques dans un cadre sécurisé.",
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1600&auto=format&fit=crop",
    category: "Thérapie",
  },
  {
    tag: "Couple",
    title: "Mieux communiquer dans son couple en 2026",
    excerpt:
      "La communication est le pilier de l'intimité. Découvrez des méthodes concrètes pour exprimer vos besoins et écouter votre partenaire sans jugement pour renforcer votre lien.",
    image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=1600&auto=format&fit=crop",
    category: "Couple",
  },
  {
    tag: "Éducation",
    title: "Déconstruire les idées reçues sur la sexualité",
    excerpt:
      "Libido constante, performance, normalité... Nous déconstruisons les mythes qui pèsent sur notre épanouissement pour retrouver une relation saine et apaisée avec son corps.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1600&auto=format&fit=crop",
    category: "Éducation",
  },
];

export default function Resources() {
  const featuredArticle = articles[0];
  const popularPosts = articles.slice(1);

  return (
    <section id="ressources" className="py-24 bg-background px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-foreground mb-6 tracking-tight">
            Ressources & Articles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Comprendre la sexothérapie, déconstruire les idées reçues et améliorer la communication dans le couple.
          </p>
        </div>

        {/* Featured Post (Layout from Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 p-6 bg-card rounded-[2rem] border border-border">
          <div className="lg:col-span-5 relative aspect-[4/3] w-full bg-muted rounded-xl overflow-hidden group">
            <Image
              src={featuredArticle.image}
              alt={featuredArticle.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="lg:col-span-7 flex flex-col items-start gap-3">
            <span className="px-3 py-1 bg-muted/80 text-foreground text-[10px] font-bold rounded-full uppercase tracking-wider">
              {featuredArticle.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-foreground leading-tight">
              {featuredArticle.title}
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed line-clamp-3">
              {featuredArticle.excerpt}
            </p>
            <div className="mt-2">
              <a href="#consultations" className="text-sm font-medium underline underline-offset-4 decoration-primary/50 hover:decoration-primary transition-all">
                Lire l'article complet →
              </a>
            </div>
          </div>
        </div>

        {/* Popular Posts Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-serif text-foreground mb-12">Popular Posts</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularPosts.map((post) => (
              <article key={post.title} className="group cursor-pointer">
                <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 bg-muted/50 w-fit px-2 py-0.5 rounded">
                    {post.tag}
                  </span>
                  <h4 className="text-xl font-serif text-foreground leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
            {/* Newsletter Card (Takes 3rd slot) */}
            <div className="group h-full flex flex-col justify-between bg-secondary/10 rounded-2xl p-8 border border-border">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6 block">
                  Newsletter
                </span>
                <h3 className="text-2xl font-serif text-foreground mb-4 leading-tight">
                  Rejoignez la communauté
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  Recevez mensuellement nos conseils pratiques, ressources exclusives et restez informé des prochains ateliers et lives.
                </p>
              </div>
              
              <div className="mt-auto">
                 <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-foreground text-background rounded-full hover:opacity-90 transition-all font-medium text-sm"
                >
                  S'abonner gratuitement
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section Re-styled */}

      </div>
    </section>
  );
}
