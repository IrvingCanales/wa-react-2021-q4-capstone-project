import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constans';
import { useLatestAPI } from './useLatestAPI';
import PropTypes from "prop-types"
useFeaturedBanners.propTypes = {
    info: PropTypes.object,
    
}
export function useFeaturedBanners(info) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  
  const [featuredBanners, setFeaturedBanners] = useState(() => ({
    data: {},
    isLoading: true,
  }));


  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
        
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedBanners() {
      try {
        setFeaturedBanners({ data: {}, isLoading: true });
        //searchTerm
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            `[[at(${info.document}, "${info.type}")]]`
          )}${info.extra}&lang=en-us&pageSize=${info.size}`,
          {
            signal: controller.signal,
          }
        )
        
        const data = await response.json();

        setFeaturedBanners({ data, isLoading: false });
      } catch (err) {
        setFeaturedBanners({ data: {}, isLoading: false });        
      }
    }

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return featuredBanners;
}