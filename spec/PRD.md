# Wedding Invitation Website PRD

## Project Overview

Transform "menyatukan-hati" into a modern, responsive online wedding invitation platform using Angular 20 and TailwindCSS.

## Epic Structure & User Stories

### Epic 1: Landing Page & Invitation Display

**User Stories:**

- As a guest, I want to see a beautiful landing page with the couple's names and wedding date
- As a guest, I want to view wedding details (date, time, venue) in an elegant format
- As a guest, I want when open the website there are a call-to-action to 'Open the invitation'
- As a guest, I want to see the couple's love story or timeline
- As a guest, I want to view wedding photos/gallery
- As a guest who cannot attend, I want to send a monetary gift through digital envelope with bank account information

### Epic 2: Configurable Theme System

**Goal**: Make color scheme easily changeable from a single configuration point

**User Stories:**

- As a developer, I want to change the entire color scheme by modifying one configuration file
- As a developer, I want to use semantic color names (primary, secondary, accent) instead of specific color names
- As a developer, I want the system to support multiple predefined color themes
- As a developer, I want custom CSS properties to automatically update throughout the application

**Technical Implementation:**

1. **Color Configuration Service**: Angular service with predefined color themes
2. **CSS Custom Properties**: Replace hardcoded colors with CSS variables
3. **Semantic Color Mapping**: Use meaningful names (primary-600, accent-400) instead of rose-600
4. **Component Updates**: Replace all hardcoded color classes with semantic equivalents
5. **Global Style Updates**: Replace hardcoded hex values with CSS custom properties

**Acceptance Criteria:**

- Single file change updates entire application color scheme
- Support for minimum 3 predefined themes (Rose, Blue, Green)
- All existing visual styling preserved with new system
- No hardcoded color values remain in templates or styles
- Theme switching capability for future enhancement

**Files to be Modified:**

- All 7 component HTML templates
- `src/styles.css`
- New: `src/app/services/theme.service.ts`
- New: `src/app/models/theme.interface.ts`

### Page Section

1. Hero Section with the couple names
2. Section to introduce the groom and the bride
3. Section to introduce metatah ceremony participant
4. Section that contain prayer in veda
5. Section that contain date, time, venue, and countdown
6. Section for photos
7. Section for metatah gallery photos (4 columns desktop, 2 columns mobile)
8. Section for digital envelope with bank account details for monetary gifts
9. Footer that say 'Matur Suksma' and 'made with love by cekingx'

## Technical Stack

- **Frontend**: Angular 20 with standalone components
- **Styling**: TailwindCSS v4
- **Build System**: Angular CLI with application builder
- **Testing**: Karma + Jasmine
- **Deployment**: Vercel

## Success Metrics

- Page load time < 3 seconds
- Mobile responsive score > 95%
- User engagement time > 2 minutes
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)