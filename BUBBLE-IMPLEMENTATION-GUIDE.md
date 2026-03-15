# DinePerks - Bubble Implementation Guide

## Database Structure (Data Types)

### 1. Restaurant
| Field Name | Field Type | Description |
|------------|------------|-------------|
| name | text | Restaurant name |
| cuisine | text | e.g., "Fine Dining", "Japanese", "Italian" |
| price_level | text | "$", "$$", "$$$", "$$$$" |
| rating | number | 0-5 decimal |
| review_count | number | Total reviews |
| address | text | Full address |
| neighborhood | text | e.g., "Downtown", "Midtown" |
| image | image | Main restaurant photo |
| description | text | About the restaurant |
| perk_amount | number | Credit amount (e.g., 50 for $50) |
| perk_minimum | number | Minimum spend required |
| perk_description | text | e.g., "$50 credit on orders over $150" |

### 2. TimeSlot
| Field Name | Field Type | Description |
|------------|------------|-------------|
| restaurant | Restaurant | Link to Restaurant |
| date | date | Available date |
| time | text | e.g., "5:30 PM", "7:00 PM" |
| is_available | yes/no | Slot availability |
| party_sizes | list of numbers | Available party sizes [2,4,6] |

### 3. Reservation
| Field Name | Field Type | Description |
|------------|------------|-------------|
| restaurant | Restaurant | Link to Restaurant |
| timeslot | TimeSlot | Link to TimeSlot |
| user | User | Link to User |
| guest_name | text | Full name |
| guest_email | text | Email address |
| guest_phone | text | Phone number |
| party_size | number | Number of guests |
| special_requests | text | Optional notes |
| status | text | "pending", "confirmed", "cancelled" |
| perk_applied | number | Credit amount applied |

### 4. User (Built-in, add these fields)
| Field Name | Field Type | Description |
|------------|------------|-------------|
| full_name | text | Display name |
| phone | text | Phone number |
| saved_restaurants | list of Restaurants | Favorites |

---

## Fixing Your Specific Errors

### Error 1: "RepeatingGroup timeslot-repeating-grid: Data source should be List of Restaurants but right now it is a List of TimeSlots"

**Problem:** Your repeating group type doesn't match the data source.

**Fix:**
1. Click on the RepeatingGroup
2. In the Appearance tab, set "Type of content" to match your data:
   - For restaurant cards: Set to `Restaurant`
   - For time slots: Set to `TimeSlot`
3. Then set "Data source" to the correct search:
   - For restaurants: `Search for Restaurants`
   - For time slots: `Search for TimeSlots` with constraint `restaurant = Current Page Restaurant`

---

### Error 2: "Dynamic data in text boxes must be printable as text"

**Problem:** You're binding an entire object instead of a text field.

**Fix:**
1. Find the Text element with the error
2. Click on "Insert dynamic data"
3. Instead of just `Current cell's Restaurant`, use:
   - `Current cell's Restaurant's name`
   - `Current cell's Restaurant's cuisine`
   - `Current cell's Restaurant's price_level`

---

### Error 3: "Create a new Reservation: value should be TimeSlot but right now it is empty"

**Problem:** The TimeSlot field isn't set when creating a reservation.

**Fix:**
1. Create a Custom State on your page:
   - Element: Page (e.g., `page_restaurant_detail`)
   - State name: `selected_timeslot`
   - State type: `TimeSlot`

2. When user clicks a time slot button, add workflow:
   - Action: "Set state"
   - Element: Your page
   - Custom state: `selected_timeslot`
   - Value: `Current cell's TimeSlot`

3. In your "Create Reservation" workflow:
   - Set timeslot field to: `page_restaurant_detail's selected_timeslot`

---

### Error 4: "Search for Restaurants: remember to fill out key"

**Problem:** You have a search with empty constraints.

**Fix Options:**

**Option A - Show all restaurants (no filter):**
1. Click on the Search
2. Remove any constraints that are empty
3. Leave it as `Search for Restaurants` with no constraints

**Option B - Filter by specific field:**
1. Add constraint: `cuisine = Dropdown Cuisine's value`
2. Check "Ignore empty constraints" so it works when filter is not selected

---

### Error 5: "Search for Restaurants: value should be List of texts but right now it is empty"

**Problem:** A field expecting a list has no value.

**Fix:**
1. Find the element expecting a list
2. If it's a filter, set a default: `["Fine Dining", "Japanese", "Italian"]`
3. Or bind to a Repeating Group's list of texts

---

### Error 6: "Google Geocode API Key"

**Fix:**
1. Go to Settings > API Keys in Bubble
2. Add your Google API Key
3. Get one from: https://console.cloud.google.com/
4. Enable "Geocoding API" and "Maps JavaScript API"

---

## Page Setup

### Page 1: Home (index)

**Custom States:**
| State Name | Type | Purpose |
|------------|------|---------|
| selected_date | date | Filter by date |
| selected_cuisine | text | Filter by cuisine |
| search_query | text | Search input |

**Elements:**
```
- Group Header (dark background #1A1614)
  - Text "DinePerks" (white, serif font)
  - Icon user profile

- Group Search
  - SearchBox (placeholder: "Search restaurants...")
  
- RepeatingGroup Filters (horizontal, type: text)
  - Data source: ["Tonight", "Cuisine", "Nearby", "Price", "Outdoor"]
  - Cell: Button with Current cell's text
  
- RepeatingGroup Restaurants (vertical)
  - Type of content: Restaurant
  - Data source: Search for Restaurants (add constraints based on filters)
  - Cell contents:
    - Image: Current cell's Restaurant's image
    - Text: Current cell's Restaurant's name
    - Text: Current cell's Restaurant's rating
    - Text: Current cell's Restaurant's cuisine
    - Text: Current cell's Restaurant's price_level
    - Group Perk Badge (background #0D9488)
      - Text: "$" & Current cell's Restaurant's perk_amount & " credit"
    - RepeatingGroup TimeSlots (horizontal, inside restaurant cell)
      - Type: TimeSlot
      - Data source: Search for TimeSlots (restaurant = Current cell's Restaurant)
```

**Workflows:**
- When restaurant card clicked → Go to page restaurant_detail (send Current cell's Restaurant)
- When time slot clicked → Go to page restaurant_detail (send Restaurant + TimeSlot)

---

### Page 2: restaurant_detail

**Page type:** Restaurant

**Custom States:**
| State Name | Type | Purpose |
|------------|------|---------|
| selected_date | date | Selected reservation date |
| selected_timeslot | TimeSlot | Selected time |
| party_size | number (default: 2) | Number of guests |

**Elements:**
```
- Image Hero (Current page's Restaurant's image)
  - Overlay gradient
  - Icon Button Back (white)
  - Icon Button Favorite (heart)

- Group Info
  - Text: Current page's Restaurant's name (serif font)
  - Text: Current page's Restaurant's rating & " ★"
  - Text: Current page's Restaurant's cuisine
  - Text: Current page's Restaurant's price_level

- Group Perk (background #0D9488, text white)
  - Icon gift
  - Text: Current page's Restaurant's perk_description

- Text "Select Date"
- RepeatingGroup Dates (horizontal)
  - Data source: Create list of dates (today + 6 days)
  - Cell: Show day name + date number
  - Highlight if Current cell's date = selected_date state

- Text "Party Size"  
- Group Party Selector
  - Icon Button minus (decrease party_size state)
  - Text: party_size state & " guests"
  - Icon Button plus (increase party_size state)

- Text "Available Times"
- RepeatingGroup TimeSlots
  - Type: TimeSlot
  - Data source: Search for TimeSlots where restaurant = Current page's Restaurant AND date = selected_date
  - Cell: Button showing Current cell's TimeSlot's time
  
- Button "Reserve" (fixed bottom, background #1A1614)
```

**Workflows:**
- Date cell clicked → Set state selected_date
- Time slot clicked → Set state selected_timeslot
- Minus clicked → Set state party_size = party_size - 1 (minimum 1)
- Plus clicked → Set state party_size = party_size + 1 (maximum 10)
- Reserve clicked → Go to page confirmation (send Restaurant, TimeSlot, party_size)

---

### Page 3: confirmation

**Page type:** Restaurant (also pass TimeSlot and party_size as URL parameters or states)

**Custom States:**
| State Name | Type | Purpose |
|------------|------|---------|
| passed_timeslot | TimeSlot | From previous page |
| passed_party_size | number | From previous page |

**Elements:**
```
- Group Header
  - Icon Button Back
  - Text "Complete Reservation"

- Group Restaurant Summary
  - Image (small): Current page's Restaurant's image
  - Text: Current page's Restaurant's name
  - Text: Current page's Restaurant's address

- Group Reservation Details (background #F5F3F0)
  - Row: Icon calendar + passed_timeslot's date formatted
  - Row: Icon clock + passed_timeslot's time
  - Row: Icon users + passed_party_size & " guests"

- Group Perk Reminder (background #0D9488/10, border #0D9488)
  - Icon check
  - Text: "$" & Current page's Restaurant's perk_amount & " credit will be applied"

- Text "Guest Information"
- Input Full Name (placeholder: "Full name")
- Input Email (content type: email)
- Input Phone (content type: phone)
- MultilineInput Special Requests (placeholder: "Allergies, special occasions...")

- Button "Confirm Reservation" (background #1A1614)
```

**Workflows:**
When "Confirm Reservation" clicked:
1. Create a new Reservation:
   - restaurant = Current page's Restaurant
   - timeslot = passed_timeslot
   - guest_name = Input Full Name's value
   - guest_email = Input Email's value
   - guest_phone = Input Phone's value
   - party_size = passed_party_size
   - special_requests = MultilineInput's value
   - status = "confirmed"
   - perk_applied = Current page's Restaurant's perk_amount

2. Show success popup or go to confirmation success page

---

## Design Tokens for Bubble

**Colors (add to Bubble Styles):**
- Primary Dark: #1A1614
- Background: #FAF9F7
- Card: #FFFFFF
- Perk/Accent: #0D9488
- Muted Text: #78716C
- Border: #E7E5E4

**Fonts:**
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

**Border Radius:**
- Cards: 12px
- Buttons: 8px
- Inputs: 8px
- Chips/Badges: 20px (fully rounded)

---

## Sample Test Data

Add these restaurants to test:

| name | cuisine | price_level | rating | perk_amount | perk_minimum |
|------|---------|-------------|--------|-------------|--------------|
| The Lighthouse | Fine Dining | $$$$ | 4.8 | 50 | 150 |
| Sakura Omakase | Japanese | $$$$ | 4.9 | 40 | 120 |
| Bistro Marcel | French | $$$ | 4.6 | 25 | 75 |
| Prime & Proper | Steakhouse | $$$$ | 4.7 | 60 | 200 |

Add time slots for each restaurant:
- Today + next 6 days
- Times: 5:00 PM, 5:30 PM, 6:00 PM, 6:30 PM, 7:00 PM, 7:30 PM, 8:00 PM, 8:30 PM
