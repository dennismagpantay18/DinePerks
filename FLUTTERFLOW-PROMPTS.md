# DinePerks - FlutterFlow Prompts by Screen

Copy and paste these prompts into FlutterFlow's AI assistant or use them as design specifications.

---

## SCREEN 1: Home / Discover Screen

```
Create a restaurant discovery home screen for a premium dining app called "DinePerks".

HEADER:
- Status bar area at top with safe area padding
- Row with "Explore" title (serif font, 28px, bold) on left
- Bell icon button (24px) on right for notifications
- Below: location selector showing "San Francisco" with a chevron-down icon, muted gray text

SEARCH BAR:
- Full-width rounded search input (12px border radius)
- Search icon on left inside the field
- Placeholder text: "Search restaurants, cuisines..."
- Light gray background (#F5F3F0)

FILTER CHIPS (horizontal scroll):
- Row of pill-shaped filter buttons, horizontally scrollable
- Chips: "Tonight", "Top Rated", "Italian", "Japanese", "French", "$$$$", "Nearby"
- Active chip: dark background (#1A1614) with white text
- Inactive chips: light background (#F5F3F0) with dark text
- 8px gap between chips, 16px horizontal padding

RESTAURANT LIST (vertical scroll):
- Section title "Available Tonight" (20px, semibold)
- Vertical list of restaurant cards with 16px gap

RESTAURANT CARD:
- White background, 12px border radius, subtle shadow
- 16:10 aspect ratio image at top with rounded top corners
- Perk badge overlay on image: teal pill (#2D9B7B) with "$25 Credit" text, positioned top-right with 12px margin
- Below image: 16px padding
- Restaurant name (18px, semibold)
- Row: star icon + rating (4.8) + dot + cuisine type + dot + price level ($$$$)
- Location with map pin icon, muted gray text
- Row of 3 available time buttons: "7:00 PM", "7:30 PM", "8:00 PM"
- Time buttons: outlined style, 8px padding, 8px border radius

BOTTOM NAVIGATION:
- Fixed bottom bar with safe area padding
- 4 tabs: Home (compass icon), Search (search icon), Saved (heart icon), Profile (user icon)
- Active tab: dark icon with dot indicator below
- Inactive tabs: muted gray icons
- White background with top border

COLORS:
- Background: #FAF9F7
- Card background: #FFFFFF
- Primary text: #1A1614
- Muted text: #8A8580
- Perk badge: #2D9B7B
- Active elements: #1A1614
```

---

## SCREEN 2: Restaurant Detail Screen

```
Create a restaurant detail screen for a premium dining app called "DinePerks".

HERO IMAGE SECTION:
- Full-width image, 45% of screen height
- Gradient overlay from transparent to dark at bottom
- Back arrow button (top-left, 40px circle, white background, 16px from edges)
- Heart/save button (top-right, 40px circle, white background)
- Restaurant name overlaid at bottom of image (28px, white, serif font, bold)
- Subtitle row below name: star + "4.8 (2.4k)" + dot + "Fine Dining" + dot + "$$$$" (white text)

INFO CARD (overlapping hero):
- White card that overlaps the hero image by 24px
- 16px border radius, subtle shadow
- Row with location pin icon + "123 Market Street, SF" (truncated if needed)
- Row with clock icon + "Open until 10 PM"
- 16px internal padding

PERK SECTION:
- Distinct card with light teal background tint (#E8F5F1)
- Left accent border (4px, teal #2D9B7B)
- "Your Perk" label (12px, teal, uppercase, semibold)
- "$25 Dining Credit" headline (22px, dark, semibold)
- Terms text: "Applied automatically to your bill. Valid for food & beverages." (14px, muted)
- 16px padding, 12px border radius

DATE SELECTOR:
- Section title "Select Date" (16px, semibold)
- Horizontal scroll of date cards
- Each card: day name on top (Mon, Tue...), date number below (14, 15...)
- Selected date: dark background, white text
- Unselected: light background, dark text
- Today indicator: small dot below the date
- 60px width per card, 8px gap

PARTY SIZE:
- Section title "Party Size" (16px, semibold)
- Horizontal row of circular buttons: 1, 2, 3, 4, 5, 6+
- Selected: dark filled circle with white number
- Unselected: outlined circle with dark number
- 48px diameter each, 12px gap

TIME SLOTS:
- Section title "Available Times" (16px, semibold)
- Grid of time buttons (3 columns)
- Each button: "7:00 PM" style text
- Available slots: outlined style
- Selected slot: dark filled with white text
- Unavailable: muted background, muted text, disabled
- 12px border radius, 8px gap

BOTTOM CTA:
- Fixed bottom bar with safe area padding
- Full-width "Reserve" button
- Dark background (#1A1614), white text, 16px padding
- 12px border radius
- 16px horizontal margin

COLORS:
- Background: #FAF9F7
- Card background: #FFFFFF
- Primary text: #1A1614
- Muted text: #8A8580
- Perk highlight: #2D9B7B
- Perk background tint: #E8F5F1
```

---

## SCREEN 3: Reservation Confirmation Screen

```
Create a reservation confirmation screen for a premium dining app called "DinePerks".

HEADER:
- Back arrow button (top-left)
- Title "Confirm Reservation" (18px, semibold, centered)
- Empty space on right for balance

RESTAURANT SUMMARY CARD:
- White card with subtle shadow
- Row layout: square image (80px) on left with 8px border radius
- Right side: restaurant name (18px, semibold), cuisine + price below (muted), location with pin icon (muted)
- 16px padding, 12px border radius

RESERVATION DETAILS CARD:
- White card below restaurant card
- 12px gap from previous card
- Three rows with icons:
  - Calendar icon + "Friday, March 14, 2025"
  - Clock icon + "7:30 PM"
  - Users icon + "2 Guests"
- Divider line
- Perk row: gift icon + "$25 Dining Credit" (teal colored text #2D9B7B)
- 16px padding, 12px border radius

GUEST INFORMATION SECTION:
- Section title "Guest Information" (16px, semibold)
- Form fields with labels above each input:
  - "Full Name" - text input
  - "Email" - email input
  - "Phone" - phone input with country code
  - "Special Requests" - multiline textarea (optional label)
- Inputs: light gray background (#F5F3F0), 12px border radius, 48px height
- 12px gap between fields
- 16px horizontal padding

POLICIES (optional accordion or text):
- "Cancellation Policy" with chevron
- Small muted text: "Free cancellation up to 2 hours before reservation"

BOTTOM CTA:
- Fixed bottom bar with safe area padding
- Full-width "Confirm Reservation" button
- Dark background (#1A1614), white text
- 16px padding, 12px border radius
- 16px horizontal margin
- Optional: loading spinner state when submitting

SUCCESS STATE (after submission):
- Full screen overlay or new screen
- Large checkmark icon in circle (teal #2D9B7B)
- "Reservation Confirmed!" (24px, semibold, serif)
- "We've sent the details to your email" (muted text)
- "View Reservation" button (dark)
- "Back to Home" link (text button, muted)

COLORS:
- Background: #FAF9F7
- Card background: #FFFFFF
- Primary text: #1A1614
- Muted text: #8A8580
- Perk/Success accent: #2D9B7B
- Input background: #F5F3F0
```

---

## GLOBAL DESIGN TOKENS

```
COLORS:
- Background: #FAF9F7 (warm off-white)
- Card/Surface: #FFFFFF
- Primary/Text: #1A1614 (warm black)
- Muted: #8A8580
- Border: #E8E6E3
- Input Background: #F5F3F0
- Perk Green: #2D9B7B
- Perk Background: #E8F5F1
- Error: #DC2626

TYPOGRAPHY:
- Headlines: Playfair Display (serif), bold
- Body: Inter (sans-serif), regular/medium
- Sizes: 12, 14, 16, 18, 20, 24, 28px

SPACING:
- Base unit: 4px
- Common: 8, 12, 16, 20, 24, 32px
- Screen padding: 16px horizontal

RADIUS:
- Small: 8px (buttons, chips)
- Medium: 12px (cards, inputs)
- Large: 16px (modals)
- Full: 9999px (pills, avatars)

SHADOWS:
- Card: 0 2px 8px rgba(26, 22, 20, 0.06)
- Elevated: 0 4px 16px rgba(26, 22, 20, 0.1)
```

---

## IMAGES

Download the generated images from the `/public/images/` folder:
- restaurant-1.jpg (Italian fine dining)
- restaurant-2.jpg (Japanese omakase)
- restaurant-3.jpg (French bistro)
- restaurant-4.jpg (American steakhouse)
- restaurant-hero.jpg (Restaurant interior for detail screen)
