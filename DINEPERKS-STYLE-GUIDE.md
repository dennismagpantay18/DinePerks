# DinePerks Style Guide for FlutterFlow

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Background | `#FAF9F7` | Main app background |
| Foreground | `#1A1614` | Primary text |
| Card | `#FFFFFF` | Card backgrounds |
| Border | `#E8E4E0` | Dividers, card borders |

### Brand Colors
| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#1A1614` | Buttons, headers |
| Primary Foreground | `#FAF9F7` | Text on primary buttons |
| Accent | `#C4784A` | Highlights, selected states |
| Perk Badge | `#2D9B75` | Perk/credit badges |
| Perk Badge Text | `#FFFFFF` | Text on perk badges |

### Neutral Colors
| Name | Hex | Usage |
|------|-----|-------|
| Muted | `#F0EBE6` | Secondary backgrounds |
| Muted Foreground | `#6B6560` | Secondary text, captions |
| Input | `#F0EBE6` | Input field backgrounds |

---

## Typography

### Font Families
- **Headers/Display**: Playfair Display (Serif)
- **Body/UI**: Inter (Sans-serif)

### Type Scale
| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| Hero Title | Playfair Display | 32px | 700 (Bold) | 1.2 |
| Section Header | Playfair Display | 24px | 600 (SemiBold) | 1.3 |
| Card Title | Inter | 18px | 600 (SemiBold) | 1.4 |
| Body | Inter | 16px | 400 (Regular) | 1.5 |
| Caption | Inter | 14px | 400 (Regular) | 1.4 |
| Small/Label | Inter | 12px | 500 (Medium) | 1.3 |
| Badge Text | Inter | 11px | 600 (SemiBold) | 1 |

---

## Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight spacing, badge padding |
| sm | 8px | Icon gaps, small margins |
| md | 12px | Card padding, list gaps |
| lg | 16px | Section spacing |
| xl | 20px | Screen padding |
| 2xl | 24px | Large section gaps |
| 3xl | 32px | Major section dividers |

---

## Border Radius

| Element | Radius |
|---------|--------|
| Buttons | 12px |
| Cards | 16px |
| Input Fields | 12px |
| Badges/Chips | 20px (pill) |
| Images | 12px |
| Bottom Sheet | 24px (top only) |

---

## Shadows

### Card Shadow
```
Offset: (0, 2)
Blur: 8
Spread: 0
Color: #1A1614 at 6% opacity
```

### Elevated Card Shadow
```
Offset: (0, 4)
Blur: 16
Spread: 0
Color: #1A1614 at 10% opacity
```

### Bottom Navigation Shadow
```
Offset: (0, -2)
Blur: 12
Spread: 0
Color: #1A1614 at 8% opacity
```

---

## Component Specifications

### Restaurant Card
- **Container**: White background, 16px radius, card shadow
- **Image**: 100% width, 180px height, 12px radius (top corners)
- **Content Padding**: 16px
- **Perk Badge**: Positioned absolute, top-right of image, 8px margin
- **Title**: 18px SemiBold, foreground color
- **Subtitle**: 14px Regular, muted foreground
- **Time Slots**: Row of chips, 8px gap between

### Time Slot Chip
- **Unselected**: Muted background, foreground text, 8px radius
- **Selected**: Primary background, primary-foreground text
- **Padding**: 12px horizontal, 10px vertical
- **Font**: 14px Medium

### Perk Badge
- **Background**: `#2D9B75`
- **Text**: White, 11px SemiBold
- **Padding**: 6px horizontal, 4px vertical
- **Radius**: 6px
- **Icon**: 12px, left of text, 4px gap

### Filter Chip
- **Unselected**: White background, border `#E8E4E0`, foreground text
- **Selected**: Primary background, primary-foreground text
- **Padding**: 12px horizontal, 8px vertical
- **Radius**: 20px (pill)
- **Font**: 14px Medium

### Primary Button
- **Background**: `#1A1614`
- **Text**: `#FAF9F7`, 16px SemiBold
- **Height**: 52px
- **Radius**: 12px
- **Full width on mobile

### Input Field
- **Background**: `#F0EBE6`
- **Border**: None (or 1px `#E8E4E0` on focus)
- **Text**: 16px Regular, foreground
- **Placeholder**: Muted foreground
- **Padding**: 16px
- **Radius**: 12px
- **Height**: 52px

---

## Screen Layouts

### Home Screen
1. **Status Bar Area**: Safe area padding
2. **Header**: 20px padding, location selector + notification icon
3. **Search Bar**: 20px horizontal margin, 16px vertical
4. **Filter Chips**: Horizontal scroll, 20px left padding, 8px gap
5. **Restaurant List**: Vertical scroll, 16px gap between cards

### Restaurant Detail Screen
1. **Hero Image**: Full width, 300px height, gradient overlay at bottom
2. **Back Button**: Absolute positioned, 16px from top/left
3. **Info Card**: -40px margin-top (overlaps hero), 16px padding
4. **Perk Section**: Accent background tint, 16px padding, 12px radius
5. **Date Carousel**: Horizontal scroll, 12px gap
6. **Time Slots Grid**: 3 columns, 8px gap
7. **Reserve Button**: Fixed bottom, safe area padding

### Confirmation Screen
1. **Header**: Back button + "Confirm Reservation" title
2. **Restaurant Card**: Image + name summary
3. **Details Section**: Icon + label pairs, 12px gap
4. **Perk Reminder**: Bordered card with perk info
5. **Form Fields**: Stacked, 12px gap
6. **Confirm Button**: Fixed bottom

---

## Icons Used

- Search (magnifying glass)
- MapPin / Location
- Bell / Notification
- ChevronLeft (back)
- ChevronRight (forward)
- Star (rating)
- Clock (time)
- Users (party size)
- Calendar (date)
- Gift / Tag (perks)
- Heart (favorites)
- User (profile)
- Home
- Check / Checkmark

---

## Animation Guidelines

- **Screen Transitions**: 300ms ease-out slide
- **Button Press**: Scale to 0.98, 100ms
- **Card Press**: Scale to 0.99, 150ms
- **Success Animation**: Checkmark with scale bounce, 400ms

---

## Images

Download the generated images from:
- `/public/images/restaurant-1.jpg`
- `/public/images/restaurant-2.jpg`
- `/public/images/restaurant-3.jpg`
- `/public/images/restaurant-4.jpg`
- `/public/images/restaurant-hero.jpg`
