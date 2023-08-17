import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'

// evita que cachee las cookies estaticas de la ruta, y que siempre se ejecute en servidor
export const dynamic = 'force.dynamic'

export async function GET (request: NextRequest) {
  const requestURL = new URL(request.url)
  console.log(requestURL)
  const code = requestURL.searchParams.get('code')
  console.log(code)
  if (code !== null) {
    const supabase = createRouteHandlerClient({ cookies })
    // atravez del codigo generado por github en la url nos devuelve el user creado en la bbdd de supabase
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(requestURL.origin)
}
