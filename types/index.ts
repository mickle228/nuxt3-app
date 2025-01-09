export interface SiteData {
  testTaskHeaderTitle?: string
  testTaskHeaderSubtitle?: string
  testTaskHeaderText?: string
  testTaskHeaderImage?: string
  testTaskHeaderImageAltText?: string
  testTaskSecondBlockTitle?: string
  testTaskSecondBlockSideNavigationTitle?: string
  testTaskSecondDescriptiveBlockItems?: string
  testTaskSlidesBlockTitle?: string
  testTaskSlidesBlockSlides?: string
}

export interface APIResponse {
  data: {
    siteData: {
      testTaskTemplate_30_15673: SiteData
    }
  }
}


export interface Item {
  title: string
  subtitle: string
  text: string
  image: string
  imageAltAtr: string
  buttonLink?: string
  buttonText?: string
}

export interface Slide {
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
  buttonLink?: string
  buttonText?: string
}