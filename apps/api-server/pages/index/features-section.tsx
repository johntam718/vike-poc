import { Zap, Shield, Smartphone, BarChart, Layers, RefreshCw } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Lightning Fast",
      description: "Optimized for speed with next-generation performance and minimal load times.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure by Default",
      description: "Built-in security features to protect your data and your users' privacy.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Responsive Design",
      description: "Looks great on any device, from mobile phones to desktop computers.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Analytics",
      description: "Comprehensive insights into user behavior and application performance.",
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Modular Architecture",
      description: "Flexible, component-based structure that scales with your needs.",
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-primary" />,
      title: "Continuous Updates",
      description: "Regular improvements and new features to keep your application cutting-edge.",
    },
  ]

  return (
    <section id="features" className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Everything you need to succeed</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Our platform provides all the tools you need to build exceptional digital experiences.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 rounded-lg border p-6 bg-background shadow-sm"
            >
              <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

