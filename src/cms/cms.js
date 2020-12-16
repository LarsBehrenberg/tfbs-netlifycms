import CMS from 'netlify-cms-app'
import typography from '../utils/typography'

import NeuigkeitenPreview from './preview-templates/NeuigkeitenPreview'

// CMS.registerLocale('de', de)

CMS.registerPreviewStyle(typography.toString(), { raw: true })

CMS.registerPreviewTemplate('neuigkeiten', NeuigkeitenPreview)

CMS.init()
