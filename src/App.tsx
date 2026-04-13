/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Instagram,
  Facebook,
  MessageSquare,
  Camera,
  Globe,
  Mail,
  Search,
  BarChart3,
  ShieldCheck,
  Award,
  ChevronRight,
  Menu,
  X,
  Phone,
  Layout,
  Layers,
  Users
} from "lucide-react";
import { useState, useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-vermelho selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-vermelho z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-brand-offwhite/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-logo font-bold text-brand-vermelho text-xl tracking-[4px]">GHOST MEDIA</span>
          </div>

          <div className="hidden md:flex items-center gap-12">
            {["Objetivo", "Etapa I", "Etapa II", "Investimento"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="label-caps hover:text-brand-vermelho transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="md:hidden text-brand-grafite" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-brand-offwhite border-b border-brand-bege-medio p-6 md:hidden flex flex-col gap-6"
          >
            {["Objetivo", "Etapa I", "Etapa II", "Investimento"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="label-caps"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-grafite">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920"
            alt="Luxury Mansion Construction"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-grafite/95 via-brand-grafite/60 to-brand-grafite" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="label-caps text-brand-dourado mb-6 block">P R O P O S T A</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-brand-offwhite mb-8 leading-[1.1]">
              Projeto de Estruturação e <br />
              <span className="text-brand-dourado">Presença Digital Premium</span>
            </h1>
            <p className="text-brand-offwhite/70 max-w-2xl mx-auto text-lg mb-12 font-light">
              Transformando a presença digital da sua construtora em um ecossistema de autoridade e valor.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#objetivo" className="btn-primary bg-brand-offwhite text-brand-grafite hover:bg-brand-dourado hover:text-white">Explorar Proposta</a>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-offwhite/30"
        >
          <div className="w-px h-12 bg-gradient-to-b from-brand-dourado to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* O Objetivo */}
      <section id="objetivo" className="py-24 md:py-32 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <span className="label-caps text-brand-vermelho mb-4 block">O PROPÓSITO</span>
              <h2 className="section-title">O Objetivo</h2>
              <div className="space-y-6 text-brand-grafite/80">
                <p className="text-xl font-medium text-brand-grafite">
                  Hoje, a presença digital deixou de ser um complemento — ela é o próprio ponto comercial da marca no mundo contemporâneo. É onde a empresa é encontrada, percebida e julgada em segundos.
                </p>
                <p>
                  Este projeto nasce com o objetivo de estruturar, desde a base, uma presença digital sólida, coerente e alinhada ao posicionamento premium da construtora. Não se trata apenas de “estar online”, mas de construir uma imagem que sustente valor, autoridade e confiança.
                </p>
                <p>
                  Grandes marcas não se estabelecem por acaso. Elas investem de forma consistente em estratégias digitais, criando movimentos coordenados que posicionam, reforçam e expandem sua presença no mercado. Existe intenção, estrutura e repetição.
                </p>
                <p className="italic border-l-2 border-brand-bege-medio pl-6 py-2">
                  Aqui, o foco é exatamente esse: criar um ecossistema digital bem fundamentado, com ações estratégicas que consolidem a marca desde o início, transformando presença em percepção — e percepção em valor.
                </p>
              </div>
            </motion.div>
            <motion.div
              {...fadeIn}
              className="relative aspect-square rounded-brand-card overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
                alt="High-end Architecture"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-vermelho/5 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ETAPA I Header */}
      <section id="etapa-i" className="py-24 bg-brand-bege/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <span className="label-caps mb-4 block">ETAPA I</span>
            <h2 className="text-4xl md:text-5xl mb-6">Fundação e Implementação (Setup Inicial)</h2>
            <p className="text-brand-grafite-claro max-w-2xl mx-auto italic">Edificar a infraestrutura técnica e a autoridade visual da marca</p>
          </motion.div>

          {/* 1. Canais Sociais */}
          <div className="mb-32">
            <motion.div {...fadeIn} className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-brand-grafite text-brand-dourado flex items-center justify-center rounded-brand-card">
                <span className="font-bold">01</span>
              </div>
              <h3 className="text-2xl md:text-3xl">Estruturação de Canais Sociais e Configuração de Anúncios</h3>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div {...fadeIn} className="card-premium">
                <h4 className="text-xl mb-6 flex items-center gap-3">
                  <Users className="text-brand-vermelho" />
                  1.1. Facebook e Instagram
                </h4>
                <p className="text-sm text-brand-grafite/70 mb-6">
                  A presença nas redes sociais para o mercado de luxo não foca em volume vazio, mas em estética e autoridade. Preparamos o terreno para que os perfis funcionem como uma extensão de alto padrão do seu site.
                </p>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3"><CheckCircle2 size={16} className="text-brand-vermelho shrink-0 mt-1" /> <span><strong>Protocolo de Aquecimento e Segurança (Facebook):</strong> Criação e aquecimento técnico de 7 dias para evitar bloqueios.</span></li>
                  <li className="flex gap-3"><CheckCircle2 size={16} className="text-brand-vermelho shrink-0 mt-1" /> <span><strong>Otimização de Perfil de Autoridade (Instagram):</strong> Reestruturação da bio e organização estratégica de destaques.</span></li>
                  <li className="flex gap-3"><CheckCircle2 size={16} className="text-brand-vermelho shrink-0 mt-1" /> <span><strong>Curadoria e Presença Social Estratégica:</strong> Implementação de uma Linha Editorial de Alto Padrão (Reels, Carrosséis e Stories).</span></li>
                </ul>
              </motion.div>

              <motion.div {...fadeIn} className="card-premium">
                <h4 className="text-xl mb-6 flex items-center gap-3">
                  <BarChart3 className="text-brand-vermelho" />
                  1.2. Estruturação do Ecossistema de Anúncios (Meta Ads)
                </h4>
                <p className="text-sm text-brand-grafite/70 mb-6">
                  Não se trata apenas de "patrocinar" posts, mas de construir uma engenharia de inteligência que encontra o cliente certo, no momento certo.
                </p>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3"><CheckCircle2 size={16} className="text-brand-vermelho shrink-0 mt-1" /> <span><strong>Configuração do Gerenciador de Negócios:</strong> Setup técnico completo e integração de ativos.</span></li>
                  <li className="flex gap-3"><CheckCircle2 size={16} className="text-brand-vermelho shrink-0 mt-1" /> <span><strong>Inteligência de Audiência:</strong> Segmentação específica (Interesses, Localização e Lookalike).</span></li>
                  <li className="flex gap-3"><CheckCircle2 size={16} className="text-brand-vermelho shrink-0 mt-1" /> <span><strong>Engenharia de Campanhas:</strong> Foco em reconhecimento de marca e geração de contatos qualificados.</span></li>
                  <li className="flex gap-3"><CheckCircle2 size={16} className="text-brand-vermelho shrink-0 mt-1" /> <span><strong>Monitoramento e Ajuste Fino:</strong> Acompanhamento diário para otimização de performance.</span></li>
                </ul>
              </motion.div>

              <motion.div {...fadeIn} className="card-premium">
                <h4 className="text-xl mb-6 flex items-center gap-3">
                  <Phone className="text-brand-vermelho" />
                  1.3. Protocolo de Atendimento e Conversão (WhatsApp)
                </h4>
                <p className="text-sm text-brand-grafite/70 mb-6">
                  Transformamos o WhatsApp em um canal de fechamento de negócios condizente com a marca.
                </p>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3"><CheckCircle2 size={16} className="text-brand-vermelho shrink-0 mt-1" /> <span><strong>Arquitetura de Resposta Rápida:</strong> Fluxo objetivo para eliminar barreiras de venda.</span></li>
                  <li className="flex gap-3"><CheckCircle2 size={16} className="text-brand-vermelho shrink-0 mt-1" /> <span><strong>Manual de Atendimento de Elite:</strong> Diretrizes de linguagem elegante e profissional.</span></li>
                  <li className="flex gap-3"><CheckCircle2 size={16} className="text-brand-vermelho shrink-0 mt-1" /> <span><strong>Mentoria e Implementação:</strong> Orientação estratégica para elevar a percepção de valor.</span></li>
                </ul>
              </motion.div>

              <motion.div {...fadeIn} className="card-premium">
                <h4 className="text-xl mb-6 flex items-center gap-3">
                  <Camera className="text-brand-vermelho" />
                  1.4. Captação inicial de imagens e vídeos
                </h4>
                <p className="text-sm text-brand-grafite/70 mb-6">
                  Produção de Ativos de Lançamento: Visita técnica focada na coleta de imagens de alta resolução.
                </p>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3"><CheckCircle2 size={16} className="text-brand-vermelho shrink-0 mt-1" /> <span><strong>Finalidade:</strong> Gerar ativos de "capa", retratos profissionais e registros de rigor técnico.</span></li>
                  <li className="flex gap-3"><CheckCircle2 size={16} className="text-brand-vermelho shrink-0 mt-1" /> <span><strong>Impacto:</strong> Matéria-prima essencial para que o design reflita o alto padrão desde o dia 1.</span></li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* 2. Infraestrutura Web */}
          <div>
            <motion.div {...fadeIn} className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-brand-grafite text-brand-dourado flex items-center justify-center rounded-brand-card">
                <span className="font-bold">02</span>
              </div>
              <h3 className="text-2xl md:text-3xl">Estruturação de Ecossistema e Infraestrutura Web</h3>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div {...fadeIn} className="lg:col-span-2 space-y-8">
                <div className="card-premium bg-brand-grafite text-brand-offwhite border-none">
                  <div className="flex gap-6 items-start">
                    <Mail className="text-brand-dourado shrink-0" size={32} />
                    <div>
                      <h4 className="text-xl mb-4 text-brand-dourado">2.1. Presença Profissional (Google Workspace)</h4>
                      <p className="text-brand-offwhite/70 mb-6">
                        A fundação de qualquer marca sólida começa pela forma como ela se comunica. O uso de e-mails gratuitos sinaliza amadorismo. Um endereço corporativo comunica organização, segurança e permanência.
                      </p>
                      <div className="space-y-4 text-sm text-brand-offwhite/80 mb-6">
                        <p>
                          <strong className="text-brand-dourado">Nossa Entrega:</strong> Realizamos a arquitetura completa da conta, configuração de segurança, padronização dos acessos e suporte na ativação. A manutenção das assinaturas mensais é de responsabilidade da empresa contratante.
                        </p>
                        <div>
                          <p className="font-bold text-brand-dourado mb-2">Plano Sugerido:</p>
                          <ul className="grid grid-cols-1 gap-4">
                            <li className="bg-white/5 p-3 rounded border border-white/10 max-w-xs">
                              <p className="text-[10px] uppercase tracking-wider text-brand-dourado">Starter</p>
                              <p className="text-lg font-display">US$ 7</p>
                              <p className="text-[10px] opacity-50">mensal/usuário</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-premium">
                  <Globe className="text-brand-vermelho mb-6" />
                  <h4 className="text-xl mb-4">2.2. Estruturação do Ecossistema Web</h4>
                  <p className="text-sm text-brand-grafite/70 mb-6">
                    O site institucional será o centro de autoridade da marca — um ativo estratégico para validar sua competência junto ao mercado de alto padrão.
                  </p>
                  <ul className="space-y-4 text-sm text-brand-grafite/80 mb-6">
                    <li className="flex gap-3"><CheckCircle2 size={16} className="text-brand-vermelho shrink-0 mt-1" /> <span><strong>Design Exclusivo:</strong> Baseado em Design System próprio para interface elegante e fluida.</span></li>
                    <li className="flex gap-3"><CheckCircle2 size={16} className="text-brand-vermelho shrink-0 mt-1" /> <span><strong>Hospedagem e Domínio:</strong> Gerenciamento completo em estrutura cloud de alta performance.</span></li>
                    <li className="flex gap-3"><CheckCircle2 size={16} className="text-brand-vermelho shrink-0 mt-1" /> <span><strong>Condições de Cronograma:</strong> O cronograma de entrega do site está diretamente ligado ao fornecimento da Identidade Visual e dos Ativos Audiovisuais (fotos e vídeos) por parte da contratante.</span></li>
                  </ul>
                  <p className="text-[10px] text-brand-grafite-claro italic border-t border-brand-bege-medio pt-4">
                    Nota Importante: Este projeto contempla a criação do Design System do site (interface), mas não inclui a criação de Branding (Logotipo e Identidade Visual da marca).
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="card-premium">
                    <Search className="text-brand-vermelho mb-4" />
                    <h4 className="text-lg mb-3">2.3. Engenharia e Inteligência Digital</h4>
                    <ul className="space-y-3 text-xs text-brand-grafite/70">
                      <li><strong>Construção e Segurança:</strong> Desenvolvimento em plataforma de alta performance com certificado SSL.</li>
                      <li><strong>Inteligência de Busca (SEO):</strong> Otimização técnica para que a marca seja encontrada no Google.</li>
                      <li><strong>Monitoramento de Dados:</strong> Integração com Google Analytics para análise de comportamento.</li>
                    </ul>
                  </div>
                  <div className="card-premium">
                    <ShieldCheck className="text-brand-vermelho mb-4" />
                    <h4 className="text-lg mb-3">2.4. Posicionamento e Consistência de Marca</h4>
                    <ul className="space-y-3 text-xs text-brand-grafite/70">
                      <li><strong>Padronização Institucional:</strong> Garantia de que a marca se comporte da mesma forma em todos os pontos de contato.</li>
                      <li><strong>Transição de Autoridade:</strong> Migração de uma imagem informal para um posicionamento de elite.</li>
                      <li><strong>Consistência Premium:</strong> Manutenção do rigor estético em todas as atualizações.</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeIn} className="card-premium bg-brand-bege border-brand-bege-medio">
                <h4 className="text-xl mb-8 flex items-center gap-2">
                  <Layout className="text-brand-vermelho" />
                  2.5. Arquitetura de Navegação
                </h4>
                <p className="text-[10px] uppercase tracking-wider text-brand-grafite-claro mb-6">As Seções do Site</p>
                <ul className="space-y-6 mb-8">
                  {[
                    { t: "1. Home", d: "O Impacto. Vitrine minimalista com mídias de alta qualidade (hero shots)." },
                    { t: "2. A Construtora", d: "A Autoridade. História, filosofia e perfil humanizado dos sócios." },
                    { t: "3. Empreendimentos", d: "O Coração. Listagem de projetos com galeria e ficha técnica." },
                    { t: "4. Expertise", d: "A Segurança. Métodos construtivos e rigor técnico de engenharia." },
                    { t: "5. Sinais de Confiança", d: "Prêmios, certificações e depoimentos curados." },
                    { t: "6. Contato", d: "A Conversão. Atendimento exclusivo via formulário e WhatsApp." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <span className="text-brand-vermelho font-bold text-xs mt-1">{i + 1}</span>
                      <div>
                        <p className="font-medium text-sm group-hover:text-brand-vermelho transition-colors">{item.t}</p>
                        <p className="text-xs text-brand-grafite-claro">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-brand-bege-medio">
                  <p className="label-caps text-[9px] mb-3">Módulo Opcional</p>
                  <h5 className="font-medium text-sm mb-2">Central de Conteúdo (Blog)</h5>
                  <p className="text-xs text-brand-grafite/60 mb-4">
                    O blog é uma ferramenta poderosa para o ranqueamento orgânico no Google e prova de autoridade, porém, exige rigor de manutenção. Recomendamos a implementação deste módulo apenas sob o compromisso de alimentação constante, pois blog descuidado passa a impressão de obra parada.
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-[10px] text-brand-grafite/70 italic">Implementação Técnica: R$ 500,00 (Pagamento único).</p>
                    <p className="text-[10px] text-brand-grafite/70 italic">Incluso: Arquitetura de notícias, categorias e sistema de publicação.</p>
                    <p className="text-[10px] text-brand-grafite/70 italic">Gestão de Conteúdo: A produção de textos pode ser contratada à parte ou realizada pela equipe interna da construtora sob nossa supervisão editorial.</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-brand-vermelho">R$ 500,00</span>
                    <span className="text-[10px] text-brand-grafite-claro uppercase">Pagamento Único</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Cronograma de Implementação moved here */}
            <motion.div {...fadeIn} className="mt-12 bg-white/50 border border-brand-bege-medio p-8 rounded-brand-card">
              <h3 className="text-xl mb-8 flex items-center gap-3 text-brand-grafite">
                <BarChart3 className="text-brand-vermelho" />
                Cronograma de Implementação
              </h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="relative pl-8 border-l border-brand-vermelho">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 bg-brand-vermelho rounded-full" />
                  <h4 className="font-medium mb-2 text-brand-grafite">Etapa 1: Infraestrutura e Lançamento (Semanas 1 a 4)</h4>
                  <p className="text-sm text-brand-grafite/60">Entrega: Site funcional com Home, Institucional e Canais de Contato. Foco em presença imediata.</p>
                </div>
                <div className="relative pl-8 border-l border-brand-bege-medio">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 bg-brand-bege-medio rounded-full" />
                  <h4 className="font-medium mb-2 text-brand-grafite">Etapa 2: Consolidação e Portfólio (Mês 2 em diante)</h4>
                  <p className="text-sm text-brand-grafite/60">Entrega: Ativação de Empreendimentos Detalhados, Expertise Técnica e Sinais de Confiança.</p>
                </div>
              </div>
              <p className="mt-8 text-xs text-brand-grafite/50 italic">
                Nota: O início de cada fase dependerá do fornecimento dos ativos específicos de cada módulo
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ETAPA II */}
      <section id="etapa-ii" className="py-24 bg-brand-grafite text-brand-offwhite">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <span className="label-caps text-brand-dourado mb-4 block">ETAPA II</span>
            <h2 className="text-4xl md:text-5xl mb-6 text-brand-offwhite">Gestão de Autoridade e Tração de Mercado</h2>
            <p className="text-brand-offwhite/60 max-w-2xl mx-auto italic">Ativar a máquina de vendas e gerir o crescimento da presença digital.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "A. Curadoria Audiovisual e Presença Social",
                desc: "O Instagram e o Facebook deixam de ser apenas perfis e passam a ser o portfólio dinâmico da empresa.",
                items: ["Curadoria In-loco semanal", "Linha Editorial Estratégica", "Gestão de Comunidade"]
              },
              {
                title: "B. Gestão de Performance (Tráfego Pago)",
                desc: "Operação da 'máquina de vendas' para garantir que a mensagem chegue ao público certo.",
                items: ["Operação de Campanhas", "Otimização de Conversão", "Acompanhamento de Atendimento"]
              },
              {
                title: "C. Inteligência de Dados e Manutenção Estrutural",
                desc: "O site e o Google não são estáticos; eles precisam de vigilância para não perderem autoridade.",
                items: ["Monitoramento de SEO", "Análise de Métricas (BI)", "Estabilidade e Suporte 24/7"]
              }
            ].map((col, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                className="border-l border-brand-dourado/30 pl-8"
              >
                <h3 className="text-2xl mb-6 text-brand-dourado">{col.title}</h3>
                <p className="text-brand-offwhite/60 mb-8 text-sm">{col.desc}</p>
                <ul className="space-y-4">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <ChevronRight size={14} className="text-brand-dourado" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizonte de Expansão Digital */}
      <section className="pt-24 pb-12 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto">
            <span className="label-caps text-brand-vermelho mb-4 block">FUTURO</span>
            <h2 className="text-3xl md:text-4xl mb-6 text-brand-grafite">Horizonte de Expansão Digital</h2>
            <p className="text-brand-grafite/80 text-lg mb-8">
              Conforme a marca se consolida e a operação amadurece, o ecossistema web pode evoluir para recursos de alto impacto:
            </p>
            
            <ul className="space-y-6 mb-12">
              <li className="flex gap-4">
                <CheckCircle2 size={16} className="text-brand-vermelho shrink-0 mt-1" />
                <div>
                  <strong className="text-brand-grafite">Área do cliente</strong><span className="text-brand-grafite/70"> — ambiente exclusivo (dashboard) e seguro onde cada cliente acompanha o andamento da sua obra: fotos semanais, cronograma, documentos e marcos de entrega.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 size={16} className="text-brand-vermelho shrink-0 mt-1" />
                <div>
                  <strong className="text-brand-grafite">Concierge Digital</strong><span className="text-brand-grafite/70"> — canal de atendimento com IA integrado ao site, com assistência inteligente para tirar dúvidas iniciais e impressionar o visitante. Ótimo também para triagem de contatos e qualificação de leads antes do primeiro contato humano.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 size={16} className="text-brand-vermelho shrink-0 mt-1" />
                <div>
                  <strong className="text-brand-grafite">Manual do Proprietário Digital</strong><span className="text-brand-grafite/70"> — acervo exclusivo entregue junto com as chaves: manuais de equipamentos, plantas finais e canal direto de suporte pós-obra</span>
                </div>
              </li>
            </ul>

            <div className="p-6 bg-brand-bege/30 border border-brand-bege-medio rounded-brand-card">
              <p className="text-sm text-brand-grafite/60 italic">
                Cada um desses módulos será apresentado em proposta específica e independente, sem alterar as condições do contrato vigente.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investimento */}
      <section id="investimento" className="pt-12 md:pt-16 pb-24 md:pb-32 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto">
            <span className="label-caps text-brand-vermelho mb-4 block">Investimento e Condições</span>
            <h2 className="text-3xl md:text-4xl mb-6">Plano de Gestão de Autoridade Digital (Full Service)</h2>
            <p className="text-brand-grafite/70 mb-12 text-lg">
              Este investimento unifica todas as frentes de atuação (Infraestrutura Web, Gestão Social e Estratégia de Tráfego), garantindo que a nossa equipe opere com total autonomia e foco em resultados.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              <div className="p-8 bg-brand-bege rounded-brand-card border border-brand-bege-medio">
                <p className="label-caps mb-2 text-brand-grafite-claro">Investimento Mensal</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-display font-light text-brand-grafite">R$ 5.820,00</span>
                </div>
                <p className="text-sm text-brand-vermelho font-medium mt-4">Contrato mínimo: 6 meses</p>
              </div>

              <div className="space-y-6">
                <h3 className="font-logo text-xs tracking-[3px] text-brand-grafite">O QUE COMPÕE ESTE VALOR:</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-brand-vermelho shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-sm font-bold text-brand-grafite mb-1">Gestão e Inteligência (Honorários):</p>
                      <p className="text-xs text-brand-grafite/70">Operação completa do site, SEO, curadoria audiovisual (visitas semanais), gestão de redes sociais e engenharia de anúncios.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-brand-vermelho shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-sm font-bold text-brand-grafite mb-1">Aporte de Performance (Incluso):</p>
                      <p className="text-xs text-brand-grafite/70">R$ 1.000,00. Valor destinado integralmente ao impulsionamento nas plataformas (Meta Ads). Gerenciamos esse recurso para garantir que sua marca alcance o público de alto padrão com constância.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-brand-vermelho shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-sm font-bold text-brand-grafite mb-1">Suporte e Infraestrutura:</p>
                      <p className="text-xs text-brand-grafite/70">Manutenção de hospedagem, monitoramento de segurança e suporte técnico especializado.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-brand-grafite">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-brand-offwhite/50 font-logo text-[10px] tracking-[4px] text-center">
            <span>GHOST MEDIA</span>
            <div className="hidden md:block w-1 h-1 bg-brand-vermelho rounded-full shrink-0" />
            <span>ESTRATÉGIA PREMIUM</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
