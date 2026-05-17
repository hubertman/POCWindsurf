import { blogPosts } from './src/lib/data';

const error401HTML = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>401 - Acceso No Autorizado</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
  <div class="max-w-md w-full">
    <div class="bg-white rounded-2xl shadow-2xl p-8 text-center">
      <div class="mx-auto w-24 h-24 mb-6 bg-red-100 rounded-full flex items-center justify-center">
        <svg class="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
        </svg>
      </div>
      <h1 class="text-8xl font-bold text-red-600 mb-2">401</h1>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Acceso No Autorizado</h2>
      <p class="text-gray-600 mb-8">
        Lo sentimos, no tienes permiso para acceder a este recurso. 
        Por favor, verifica tus credenciales o contacta al administrador.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/" class="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          Ir al Inicio
        </a>
        <a href="/posts" class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg">
          Ver Posts
        </a>
      </div>
      <div class="mt-8 pt-6 border-t border-gray-200">
        <p class="text-sm text-gray-500">
          API Server - Error 401
        </p>
      </div>
    </div>
    <p class="text-center text-gray-500 text-sm mt-6">
      © ${new Date().getFullYear()} My Website
    </p>
  </div>
</body>
</html>
`;

const error404HTML = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 - Página No Encontrada</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
  <div class="max-w-md w-full">
    <div class="bg-white rounded-2xl shadow-2xl p-8 text-center">
      <div class="mx-auto w-24 h-24 mb-6 bg-orange-100 rounded-full flex items-center justify-center">
        <svg class="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
      <h1 class="text-8xl font-bold text-orange-600 mb-2">404</h1>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Página No Encontrada</h2>
      <p class="text-gray-600 mb-8">
        Lo sentimos, la página que buscas no existe o ha sido movida. 
        Por favor, verifica la URL o navega a otra sección.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/" class="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          Ir al Inicio
        </a>
        <a href="/posts" class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg">
          Ver Posts
        </a>
      </div>
      <div class="mt-8 pt-6 border-t border-gray-200">
        <p class="text-sm text-gray-500">
          API Server - Error 404
        </p>
      </div>
    </div>
    <p class="text-center text-gray-500 text-sm mt-6">
      © ${new Date().getFullYear()} My Website
    </p>
  </div>
</body>
</html>
`;

const server = Bun.serve({
  port: 3001,
  routes: {
    '/posts': {
      GET: () => {
        return Response.json(blogPosts);
      },
    },
    '/error-401': {
      GET: () => {
        return new Response(error401HTML, {
          headers: {
            'Content-Type': 'text/html; charset=UTF-8',
          },
          status: 401,
        });
      },
    },
  },
  fetch(req: Request) {
    return new Response(error404HTML, {
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
      },
      status: 404,
    });
  },
});

console.log(`Server running at ${server.url}`);
