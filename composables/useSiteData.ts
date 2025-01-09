import { ref } from 'vue'
import { fetchSiteData } from '../services/siteDataService'
import { SiteData } from '../types'

const siteData = ref<SiteData | null>(null)
const isLoading = ref<boolean>(false)
const error = ref<string | null>(null)

export const useSiteData = async (): Promise<{
  siteData: typeof siteData
  isLoading: typeof isLoading
  error: typeof error
}> => {
  if (!siteData.value) {
    isLoading.value = true
    try {
      siteData.value = await fetchSiteData()
    } catch (err) {
      error.value = 'Error fetching site data.'
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  return { siteData, isLoading, error }
}
