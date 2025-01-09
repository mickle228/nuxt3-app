import { APIResponse, SiteData } from '../types'

const API_URL = 'https://voicenter-test-api.voicenter-ltd.workers.dev/api/site-data'

export const fetchSiteData = async (): Promise<SiteData | null> => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data: APIResponse = await response.json()
    return data.data.siteData.testTaskTemplate_30_15673
  } catch (error) {
    console.error('Error fetching site data:', error)
    throw error
  }
}
