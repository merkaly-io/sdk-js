import { CreateMediaValidator, UpdateMediaValidator } from '@merkaly/api/src/inventory/media/media.validator'
import { plainToInstance } from 'class-transformer'
import { useAxios } from '../../../nuxt.axios'
import MediaReference from './media.reference'

export class MediaEndpoint {
  public find () {
    return useAxios.get<MediaReference[]>('/inventory/media/')
      .then(medias => medias.map(media => plainToInstance(MediaReference, media)))
  }

  public read (id: MediaReference['id']) {
    return useAxios.get<MediaReference>('/inventory/media/' + id)
      .then(media => plainToInstance(MediaReference, media))
  }

  public create (payload: CreateMediaValidator) {
    return useAxios.post<MediaReference>('/inventory/media/', payload)
      .then(media => plainToInstance(MediaReference, media))
  }

  public update (id: MediaReference['id'], payload: UpdateMediaValidator) {
    return useAxios.patch<MediaReference>('/inventory/media/' + id, payload)
      .then(media => plainToInstance(MediaReference, media))
  }

  public remove (id: MediaReference['id']) {
    return useAxios.delete<void>('/inventory/media/' + id)
  }
}
