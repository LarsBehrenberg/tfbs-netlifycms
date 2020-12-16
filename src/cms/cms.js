import CMS from 'netlify-cms-app'
import typography from '../utils/typography'
import { de } from 'netlify-cms-locales'

import NeuigkeitenPreview from './preview-templates/NeuigkeitenPreview'

CMS.registerLocale('de', de)

CMS.registerPreviewStyle(typography.toString(), { raw: true })

CMS.registerPreviewTemplate('neuigkeiten', NeuigkeitenPreview)

CMS.init()
