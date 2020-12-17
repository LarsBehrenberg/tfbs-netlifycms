import CMS from 'netlify-cms-app'
import typography from '../utils/typography'
import { de } from 'netlify-cms-locales'

import NeuigkeitenPreview from './preview-templates/NeuigkeitenPreview'
import VeranstaltungenPreview from './preview-templates/VeranstaltungenPreview'

CMS.registerLocale('de', de)
CMS.registerPreviewStyle(typography.toString(), { raw: true })

CMS.registerPreviewStyle('./preview-styles/index.css')

CMS.registerPreviewTemplate('neuigkeiten', NeuigkeitenPreview)
CMS.registerPreviewTemplate('veranstaltungen', VeranstaltungenPreview)

CMS.init()
