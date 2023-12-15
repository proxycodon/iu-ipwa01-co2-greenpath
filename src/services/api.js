const BASE_URL = 'http://localhost:3000/api'

// GET-Request to API endpoints
export default {
  async getFaqs () {
    try {
      const response = await fetch(`${BASE_URL}/faqs`)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    } catch (error) {
      console.error('Error fetching FAQs:', error)
      throw error
    }
  },
  async getEmissions () {
    try {
      const response = await fetch(`${BASE_URL}/emissions`)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    } catch (error) {
      console.error('Error fetching Emissions:', error)
      throw error
    }
  }
}
