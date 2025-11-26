// src/lib/api.js

const API_BASE_URL = 'https://teclab.uct.cl/~mgodoy2025/api';

async function fetchAPI(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    
    // Verificar que la respuesta sea exitosa
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return null;
    }
    
    // Verificar que sea JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error('La respuesta no es JSON:', await response.text());
      return null;
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error en API:', error);
    return null;
  }
}

export const resenasAPI = {
  async listar() {
    // Usa el archivo que YA TIENES
    const data = await fetchAPI('listar.php');
    if (!data) {
      return { success: false, resenas: [] };
    }
    return data;
  },

  async estadisticas() {
    // Usa el archivo que YA TIENES
    const data = await fetchAPI('estadisticas.php');
    if (!data) {
      return { 
        success: false, 
        estadisticas: {
          total: 0,
          promedio: 0,
          estrellas_5: 0,
          estrellas_4: 0,
          estrellas_3: 0,
          estrellas_2: 0,
          estrellas_1: 0
        }
      };
    }
    return data;
  },

  async crear(datos) {
    try {
      const response = await fetch(`${API_BASE_URL}/crear.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
      });

      if (!response.ok) {
        return { success: false, error: 'Error al enviar la reseña' };
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        return { success: false, error: 'Respuesta inválida del servidor' };
      }

      return await response.json();
    } catch (error) {
      console.error('Error creando reseña:', error);
      return { success: false, error: 'Error de conexión' };
    }
  },

  // Para el panel de admin
  async listarTodas() {
    const data = await fetchAPI('admin/listar.php');
    if (!data) {
      return { success: false, resenas: [] };
    }
    return data;
  },

  async aprobar(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/aprobar.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      return await response.json();
    } catch (error) {
      return { success: false, error: 'Error de conexión' };
    }
  },

  async rechazar(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/rechazar.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      return await response.json();
    } catch (error) {
      return { success: false, error: 'Error de conexión' };
    }
  },

  async eliminar(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/eliminar.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      return await response.json();
    } catch (error) {
      return { success: false, error: 'Error de conexión' };
    }
  }
};