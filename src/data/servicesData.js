import { Code, ShoppingCart, Search, RefreshCw, Server, MessageCircle, Bot, Wrench, BarChart, Zap, Mail, Rocket, Layers } from 'lucide-react';

export const services = [
  {
    slug: "desarrollo-web",
    icon: Code,
    title: "Desarrollo Web",
    description: "Sitios web modernos y responsivos con las últimas tecnologías.",
    features: ["React & Next.js", "Diseño Responsivo", "Optimización de Rendimiento", "SEO Integrado"],
    details: {
      mainDescription: "Creamos experiencias web inmersivas y de alto rendimiento que cautivan a tu audiencia. Desde páginas corporativas hasta aplicaciones web complejas, nuestro equipo utiliza las tecnologías más avanzadas para construir soluciones rápidas, seguras y escalables que impulsan tu negocio.",
      keyPoints: [
        { icon: Zap, title: "Rendimiento Superior", description: "Optimizamos cada línea de código y recurso para garantizar tiempos de carga ultrarrápidos." },
        { icon: Wrench, title: "Totalmente Personalizado", description: "Diseños y funcionalidades a medida que reflejan la identidad única de tu marca." },
        { icon: BarChart, title: "Preparado para Crecer", description: "Arquitecturas escalables que se adaptan al crecimiento de tu empresa." }
      ],
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
    }
  },
  {
    slug: "soluciones-a-medida",
    icon: Wrench,
    title: "Soluciones a la Medida",
    description: "Software personalizado que se adapta perfectamente a tu negocio.",
    features: ["Análisis de Requerimientos", "Arquitectura Escalable", "Integración de APIs", "Soporte Continuo"],
    details: {
      mainDescription: "Desarrollamos software a medida que resuelve tus desafíos operativos más complejos. Analizamos tus procesos de negocio para crear herramientas potentes y eficientes que automatizan tareas, mejoran la productividad y te dan una ventaja competitiva.",
      keyPoints: [
        { icon: Zap, title: "Eficiencia Operativa", description: "Automatiza procesos manuales y reduce costos operativos." },
        { icon: Wrench, title: "Adaptabilidad Total", description: "Una solución que se amolda a tus flujos de trabajo, no al revés." },
        { icon: BarChart, title: "Inteligencia de Negocio", description: "Obtén datos valiosos para tomar decisiones estratégicas." }
      ],
      imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
    }
  },
  {
    slug: "e-commerce",
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Tiendas online potentes que impulsan tus ventas.",
    features: ["Pasarelas de Pago", "Gestión de Inventario", "Panel Administrativo", "Marketing Digital"],
    details: {
      mainDescription: "Construimos plataformas de e-commerce robustas y atractivas, diseñadas para convertir visitantes en clientes. Integramos pasarelas de pago seguras, sistemas de gestión de inventario y herramientas de marketing para ofrecer una experiencia de compra excepcional.",
      keyPoints: [
        { icon: Zap, title: "Conversión Optimizada", description: "Diseño enfocado en maximizar las ventas y la retención de clientes." },
        { icon: Wrench, title: "Gestión Simplificada", description: "Administra productos, pedidos y clientes desde un panel intuitivo." },
        { icon: BarChart, title: "Análisis de Ventas", description: "Métricas detalladas para entender el comportamiento de tus clientes." }
      ],
      imageUrl: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f"
    }
  },
  {
    slug: "optimizacion-seo",
    icon: Search,
    title: "Optimización SEO",
    description: "Mejora tu visibilidad en buscadores y atrae más clientes.",
    features: ["Auditoría SEO", "Optimización On-Page", "Link Building", "Análisis de Competencia"],
    details: {
      mainDescription: "Posicionamos tu sitio web en los primeros lugares de Google. Nuestro enfoque integral de SEO abarca desde la optimización técnica y de contenido hasta la construcción de autoridad de dominio, atrayendo tráfico orgánico de alta calidad que se convierte en negocio.",
      keyPoints: [
        { icon: Zap, title: "Más Tráfico Cualificado", description: "Atrae a usuarios que buscan activamente tus productos o servicios." },
        { icon: Wrench, title: "Autoridad de Marca", description: "Conviértete en un referente en tu industria." },
        { icon: BarChart, title: "ROI Medible", description: "Estrategias basadas en datos para un retorno de inversión claro." }
      ],
      imageUrl: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23"
    }
  },
  {
    slug: "email-marketing",
    icon: Mail,
    title: "Email Marketing",
    description: "Campañas de email efectivas para nutrir y convertir leads.",
    features: ["Diseño de Plantillas", "Automatización de Flujos", "Segmentación de Audiencia", "Análisis de Métricas"],
    details: {
      mainDescription: "Diseñamos y ejecutamos estrategias de email marketing que construyen relaciones duraderas con tu audiencia. Desde newsletters informativas hasta complejos flujos de automatización, te ayudamos a entregar el mensaje correcto a la persona correcta en el momento adecuado.",
      keyPoints: [
        { icon: Zap, title: "Aumenta la Retención", description: "Fomenta la lealtad y mantén a tus clientes comprometidos con tu marca." },
        { icon: Wrench, title: "Nutrición de Leads", description: "Guía a los prospectos a través del embudo de ventas de forma automática." },
        { icon: BarChart, title: "ROI Excepcional", description: "El email marketing sigue siendo uno de los canales con mayor retorno de inversión." }
      ],
      imageUrl: "https://images.unsplash.com/photo-1586953208448-3151cf794715"
    }
  },
  {
    slug: "optimizacion-de-sitios",
    icon: Rocket,
    title: "Optimización de Sitios",
    description: "Mejoramos la velocidad y rendimiento de tu web para una mejor UX.",
    features: ["Análisis de Performance", "Optimización de Imágenes", "Minificación de Código", "Mejora de Core Web Vitals"],
    details: {
      mainDescription: "Un sitio web lento frustra a los usuarios y perjudica tu ranking en buscadores. Realizamos un análisis exhaustivo para identificar y eliminar cuellos de botella, optimizando cada aspecto de tu web para que cargue a la velocidad de la luz y ofrezca una experiencia de usuario impecable.",
      keyPoints: [
        { icon: Zap, title: "Velocidad Extrema", description: "Reduce los tiempos de carga y mejora la satisfacción del usuario." },
        { icon: Wrench, title: "Mejor Ranking SEO", description: "La velocidad es un factor clave para Google. Sube en los resultados de búsqueda." },
        { icon: BarChart, title: "Mayor Conversión", description: "Un sitio rápido mantiene a los usuarios enganchados y aumenta las conversiones." }
      ],
      imageUrl: "https://images.unsplash.com/photo-1607703703520-bb2a8e355121"
    }
  },
  {
    slug: "desarrollo-wp",
    icon: Layers,
    title: "Desarrollo WP a la Medida",
    description: "Plugins y temas de WordPress personalizados para tus necesidades.",
    features: ["Desarrollo de Temas", "Creación de Plugins", "Integración con APIs", "Mantenimiento WP"],
    details: {
      mainDescription: "Llevamos WordPress al siguiente nivel. Si las soluciones estándar no son suficientes, creamos temas y plugins a medida que se ajustan perfectamente a tus requerimientos. Extendemos la funcionalidad de WordPress para crear soluciones únicas, robustas y fáciles de gestionar.",
      keyPoints: [
        { icon: Zap, title: "Funcionalidad Única", description: "Crea herramientas y características que no existen en ningún otro plugin." },
        { icon: Wrench, title: "Control Total", description: "Un tema diseñado desde cero para tu marca, sin código innecesario." },
        { icon: BarChart, title: "Integración Perfecta", description: "Conecta WordPress con tus sistemas y APIs externas sin problemas." }
      ],
      imageUrl: "https://images.unsplash.com/photo-1599658880122-ac55a3a99c44"
    }
  },
  {
    slug: "recuperacion-de-sitios",
    icon: RefreshCw,
    title: "Recuperación de Sitios",
    description: "Restauramos y mejoramos sitios web comprometidos o dañados.",
    features: ["Análisis de Seguridad", "Limpieza de Malware", "Backup y Restauración", "Fortalecimiento"],
    details: {
      mainDescription: "Un sitio web hackeado o caído puede ser devastador. Actuamos rápidamente para diagnosticar, limpiar y restaurar tu sitio, implementando medidas de seguridad avanzadas para prevenir futuros ataques y proteger tu reputación online.",
      keyPoints: [
        { icon: Zap, title: "Respuesta Rápida", description: "Minimizamos el tiempo de inactividad y el impacto en tu negocio." },
        { icon: Wrench, title: "Seguridad Reforzada", description: "Implementamos parches y firewalls para una protección robusta." },
        { icon: BarChart, title: "Monitoreo Proactivo", description: "Vigilancia continua para detectar y neutralizar amenazas." }
      ],
      imageUrl: "https://images.unsplash.com/photo-1585899949599-9c102541314a"
    }
  },
  {
    slug: "administracion-de-servidores",
    icon: Server,
    title: "Administración de Servidores",
    description: "Gestión completa de infraestructura para máximo rendimiento.",
    features: ["Monitoreo 24/7", "Optimización de Recursos", "Backups Automáticos", "Seguridad Avanzada"],
    details: {
      mainDescription: "Nos encargamos de la gestión, mantenimiento y optimización de tus servidores para que puedas centrarte en tu negocio. Garantizamos un rendimiento óptimo, máxima disponibilidad y seguridad de nivel empresarial para tu infraestructura crítica.",
      keyPoints: [
        { icon: Zap, title: "Máximo Uptime", description: "Infraestructura confiable y monitoreada 24/7 para garantizar la continuidad del negocio." },
        { icon: Wrench, title: "Rendimiento Optimizado", description: "Configuraciones finas para que tus aplicaciones vuelen." },
        { icon: BarChart, title: "Escalabilidad Flexible", description: "Recursos que crecen contigo, adaptándose a la demanda." }
      ],
      imageUrl: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b"
    }
  },
  {
    slug: "mensajeria-instantanea",
    icon: MessageCircle,
    title: "Mensajería Instantánea",
    description: "Sistemas de comunicación en tiempo real para tu empresa.",
    features: ["Chat en Vivo", "Notificaciones Push", "Integración Móvil", "Historial de Conversaciones"],
    details: {
      mainDescription: "Implementamos soluciones de mensajería instantánea y chat en vivo para mejorar la comunicación con tus clientes y la colaboración interna. Crea canales de comunicación directos y eficientes que mejoran la satisfacción y la productividad.",
      keyPoints: [
        { icon: Zap, title: "Soporte Inmediato", description: "Resuelve las dudas de tus clientes en tiempo real, aumentando la conversión." },
        { icon: Wrench, title: "Comunicación Interna", description: "Agiliza la colaboración entre equipos con canales de chat privados." },
        { icon: BarChart, title: "Engagement del Usuario", description: "Interactúa proactivamente con los visitantes de tu web." }
      ],
      imageUrl: "https://images.unsplash.com/photo-1553678324-f84674bd7b24"
    }
  },
  {
    slug: "chatbots",
    icon: Bot,
    title: "Chatbots",
    description: "Automatización inteligente para atención al cliente 24/7.",
    features: ["IA Conversacional", "Integración WhatsApp", "Respuestas Automáticas", "Análisis de Interacciones"],
    details: {
      mainDescription: "Desarrollamos chatbots inteligentes que ofrecen atención al cliente 24/7, capturan leads y automatizan tareas repetitivas. Integrados con IA y plataformas como WhatsApp, nuestros bots ofrecen conversaciones naturales y eficientes que deleitan a tus usuarios.",
      keyPoints: [
        { icon: Zap, title: "Atención 24/7", description: "Tu negocio nunca duerme, ofreciendo soporte constante a tus clientes." },
        { icon: Wrench, title: "Reducción de Carga", description: "Libera a tu equipo humano para que se enfoque en tareas de alto valor." },
        { icon: BarChart, title: "Generación de Leads", description: "Califica prospectos y agenda reuniones de forma automática." }
      ],
      imageUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74"
    }
  }
];

export const stats = [
  { number: "500+", label: "Proyectos Completados" },
  { number: "98%", label: "Satisfacción del Cliente" },
  { number: "24/7", label: "Soporte Técnico" },
  { number: "5+", label: "Años de Experiencia" }
];