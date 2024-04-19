This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Primeros pasos

1. Clonar el repositorio.
2. Establecer las variables de entorno en el archivo `.env` ubicado en la raiz del proyecto.

```bash
# Clerk (https://clerk.com/)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Neon DB (https://neon.tech/)
DATABASE_URL=

# Stripe (https://stripe.com/)
STRIPE_API_KEY=

STRIPE_WEBHOOK_SECRET=
```

Para obtener el `STRIPE_WEBHOOK_SECRET` y realizar pruebas con stripe en el entorno local visitar (https://dashboard.stripe.com/test/webhooks)[https://dashboard.stripe.com/test/webhooks].

```bash
stripe login
stripe listen --forward-to localhost:3000/api/webhooks/stripe
stripe trigger payment_intent.succeeded
```

Visit (Settings Billing Customer Portal)[https://dashboard.stripe.com/settings/billing/portal] and click to "Activate test link" to test your customer portal.

3. Metiendo algunos datos a la BD, subiendo cambios y visualizando.

```bash
npm run db:seed
npm run db:push
npm run db:studio
```

4. Ejecutar los comandos

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
