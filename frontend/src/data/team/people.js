/**
 * Master directory of unique individuals in SPArC.
 * Each person has one canonical identity and can hold multiple organizational assignments.
 */
export const PEOPLE = {
  "dr-mohammad-reyaz": {
    id: "dr-mohammad-reyaz",
    name: "Dr. Mohammad Reyaz",
    title: "Principal, Karim City College",
    bio: "Guiding SPArC with institutional leadership and visionary support.",
    image: null,
    assignments: [
      { type: "institutional-leadership", role: "Principal" }
    ]
  },
  "dr-yahiya-ibrahim": {
    id: "dr-yahiya-ibrahim",
    name: "Dr. S. M. Yahiya Ibrahim",
    title: "Convener, SPArC",
    bio: "Spearheading cultural initiatives, artistic excellence and student mentoring since 2004.",
    image: null,
    assignments: [
      { type: "institutional-leadership", role: "Convener" }
    ]
  },
  "dr-moiz-ashraf": {
    id: "dr-moiz-ashraf",
    name: "Dr. Md Moiz Ashraf",
    title: "Executive Committee Member",
    image: null,
    assignments: [
      { type: "executive-committee", role: "Executive Member" }
    ]
  },
  "dr-basudhara-roy": {
    id: "dr-basudhara-roy",
    name: "Dr. Basudhara Roy",
    title: "Executive Member & Activity Mentor (Literary)",
    image: null,
    assignments: [
      { type: "executive-committee", role: "Executive Member" },
      { type: "activity-mentor", area: "Literary", role: "Literary Mentor" }
    ]
  },
  "prof-saket-kumar": {
    id: "prof-saket-kumar",
    name: "Prof. Saket Kumar",
    title: "Executive Committee Member",
    image: null,
    assignments: [
      { type: "executive-committee", role: "Executive Member" }
    ]
  },
  "dr-kauser-tasneem": {
    id: "dr-kauser-tasneem",
    name: "Dr. Kauser Tasneem",
    assignments: [
      { type: "advisory-committee", role: "Advisory Member" }
    ]
  },
  "dr-rashmi-akhtar": {
    id: "dr-rashmi-akhtar",
    name: "Dr. Rashmi Akhtar",
    assignments: [
      { type: "advisory-committee", role: "Advisory Member" }
    ]
  },
  "dr-shahbaz-ansari": {
    id: "dr-shahbaz-ansari",
    name: "Dr. Shahbaz Ansari",
    assignments: [
      { type: "advisory-committee", role: "Advisory Member" }
    ]
  },
  "dr-sandhya-sinha": {
    id: "dr-sandhya-sinha",
    name: "Dr. Sandhya Sinha",
    assignments: [
      { type: "advisory-committee", role: "Advisory Member" }
    ]
  },
  "dr-abdul-latif-mandal": {
    id: "dr-abdul-latif-mandal",
    name: "Dr. Abdul Latif Mandal",
    assignments: [
      { type: "advisory-committee", role: "Advisory Member" }
    ]
  },
  "dr-fauzia-tabassum": {
    id: "dr-fauzia-tabassum",
    name: "Dr. Fauzia Tabassum",
    assignments: [
      { type: "advisory-committee", role: "Advisory Member" }
    ]
  },
  "dr-anupama-mishra": {
    id: "dr-anupama-mishra",
    name: "Dr. Anupama Mishra",
    assignments: [
      { type: "advisory-committee", role: "Advisory Member" }
    ]
  },
  "pankaj-jha": {
    id: "pankaj-jha",
    name: "Mr. Pankaj Jha",
    assignments: [
      { type: "activity-mentor", area: "Music", role: "Music Mentor" }
    ]
  },
  "jitesh-sah": {
    id: "jitesh-sah",
    name: "Mr. Jitesh Sah",
    assignments: [
      { type: "activity-mentor", area: "Music", role: "Music Mentor" }
    ]
  },
  "shivlal-sagar": {
    id: "shivlal-sagar",
    name: "Mr. Shivlal Sagar",
    assignments: [
      { type: "activity-mentor", area: "Drama", role: "Drama Mentor" }
    ]
  },
  "apurba-dey": {
    id: "apurba-dey",
    name: "Mr. Apurba Dey",
    assignments: [
      { type: "activity-mentor", area: "Fine Arts", role: "Fine Arts Mentor" }
    ]
  },
  "saniya-akhtar": {
    id: "saniya-akhtar",
    name: "Saniya Akhtar",
    assignments: [
      { type: "student-leadership", role: "Chief Organising Secretary", year: "2026–27" }
    ]
  },
  "keya-mahato": {
    id: "keya-mahato",
    name: "Keya Mahato",
    assignments: [
      { type: "student-leadership", role: "Asst. Chief Organising Secretary", year: "2026–27" }
    ]
  },
  "harneet-bawa": {
    id: "harneet-bawa",
    name: "Harneet Bawa",
    assignments: [
      { type: "student-leadership", role: "Literary Secretary", year: "2026–27" },
      { type: "sparkling-span", role: "Chief Editor" }
    ]
  },
  "shruti-tiwary": {
    id: "shruti-tiwary",
    name: "Shruti Tiwary",
    assignments: [
      { type: "student-leadership", role: "Cultural Secretary", year: "2026–27" }
    ]
  },
  "trikok-singh": {
    id: "trikok-singh",
    name: "Trikok Singh",
    assignments: [
      { type: "student-leadership", role: "Secretary HR", year: "2026–27" }
    ]
  },
  "sushant-bobonga": {
    id: "sushant-bobonga",
    name: "Sushant Bobonga",
    assignments: [
      { type: "student-leadership", role: "Secretary Logistics", year: "2026–27" }
    ]
  },
  "rohit-sharma": {
    id: "rohit-sharma",
    name: "Rohit Sharma",
    assignments: [
      { type: "club-moderator", club: "Literary Club" }
    ]
  },
  "anusha-das": {
    id: "anusha-das",
    name: "Anusha Das",
    assignments: [
      { type: "club-member", club: "Literary Club" },
      { type: "sparkling-span", role: "Editor, English" }
    ]
  },
  "aaliya-kauser": {
    id: "aaliya-kauser",
    name: "Aaliya Kauser",
    assignments: [
      { type: "club-member", club: "Literary Club" }
    ]
  },
  "umme-adiba": {
    id: "umme-adiba",
    name: "Umme Adiba",
    assignments: [
      { type: "club-member", club: "Literary Club" }
    ]
  },
  "tushar-kumbhakar": {
    id: "tushar-kumbhakar",
    name: "Tushar Kumbhakar",
    assignments: [
      { type: "club-member", club: "Literary Club" }
    ]
  },
  "deepankar-das": {
    id: "deepankar-das",
    name: "Deepankar Das",
    assignments: [
      { type: "club-moderator", club: "Fine Art Club" }
    ]
  },
  "shruti-mandal": {
    id: "shruti-mandal",
    name: "Shruti Mandal",
    assignments: [
      { type: "club-member", club: "Fine Art Club" },
      { type: "sparkling-span", role: "Editor, Bangla" }
    ]
  },
  "manasi-kumari": {
    id: "manasi-kumari",
    name: "Manasi Kumari",
    assignments: [
      { type: "club-member", club: "Fine Art Club" }
    ]
  },
  "anidhya-kumari": {
    id: "anidhya-kumari",
    name: "Anidhya Kumari",
    assignments: [
      { type: "club-member", club: "Fine Art Club" }
    ]
  },
  "astha-priya": {
    id: "astha-priya",
    name: "Astha Priya",
    assignments: [
      { type: "club-moderator", club: "Book Club" }
    ]
  },
  "anupama-singh": {
    id: "anupama-singh",
    name: "Anupama Singh",
    assignments: [
      { type: "club-member", club: "Book Club" }
    ]
  },
  "bhumika-patar": {
    id: "bhumika-patar",
    name: "Bhumika Patar",
    assignments: [
      { type: "club-member", club: "Book Club" }
    ]
  },
  "ayna-marziya": {
    id: "ayna-marziya",
    name: "Ayna Marziya",
    assignments: [
      { type: "club-member", club: "Book Club" }
    ]
  },
  "sujata-bhadra": {
    id: "sujata-bhadra",
    name: "Sujata Bhadra",
    assignments: [
      { type: "club-moderator", club: "Music Club" }
    ]
  },
  "abishek-hansda": {
    id: "abishek-hansda",
    name: "Abishek Hansda",
    assignments: [
      { type: "club-member", club: "Music Club" }
    ]
  },
  "anitro-siddharto": {
    id: "anitro-siddharto",
    name: "Anitro Siddharto",
    assignments: [
      { type: "club-member", club: "Music Club" }
    ]
  },
  "varsha-durai-buru": {
    id: "varsha-durai-buru",
    name: "Varsha Durai Buru",
    assignments: [
      { type: "club-member", club: "Music Club" }
    ]
  },
  "swati-kumari": {
    id: "swati-kumari",
    name: "Swati Kumari",
    assignments: [
      { type: "club-member", club: "Music Club" }
    ]
  },
  "rahul-soren": {
    id: "rahul-soren",
    name: "Rahul Soren",
    assignments: [
      { type: "club-moderator", club: "Drama Club" }
    ]
  },
  "raunak-roushan": {
    id: "raunak-roushan",
    name: "Raunak Roushan",
    assignments: [
      { type: "club-member", club: "Drama Club" }
    ]
  },
  "sumit-bari": {
    id: "sumit-bari",
    name: "Sumit Bari",
    assignments: [
      { type: "club-member", club: "Drama Club" }
    ]
  },
  "afsana-khaatoon": {
    id: "afsana-khaatoon",
    name: "Afsana Khaatoon",
    assignments: [
      { type: "body-moderator", body: "HR" }
    ]
  },
  "taniya-parveen": {
    id: "taniya-parveen",
    name: "Taniya Parveen",
    assignments: [
      { type: "body-member", body: "HR" }
    ]
  },
  "farheen": {
    id: "farheen",
    name: "Farheen",
    assignments: [
      { type: "body-member", body: "HR" },
      { type: "sparkling-span", role: "Editor, Hindi" }
    ]
  },
  "anu-jha": {
    id: "anu-jha",
    name: "Anu Jha",
    assignments: [
      { type: "body-member", body: "HR" }
    ]
  },
  "ipshita-mangaraj": {
    id: "ipshita-mangaraj",
    name: "Ipshita Mangaraj",
    assignments: [
      { type: "body-member", body: "HR" }
    ]
  },
  "gourav-mahato": {
    id: "gourav-mahato",
    name: "Gourav Mahato",
    assignments: [
      { type: "body-moderator", body: "Logistics" }
    ]
  },
  "hanifa-moab": {
    id: "hanifa-moab",
    name: "Hanifa Moab",
    assignments: [
      { type: "body-member", body: "Logistics" }
    ]
  },
  "aashish-mahato": {
    id: "aashish-mahato",
    name: "Aashish Mahato",
    assignments: [
      { type: "body-member", body: "Logistics" }
    ]
  },
  "aryan-kumar": {
    id: "aryan-kumar",
    name: "Aryan Kumar",
    assignments: [
      { type: "body-member", body: "Logistics" }
    ]
  },
  "moushami-kalindi": {
    id: "moushami-kalindi",
    name: "Moushami Kalindi",
    assignments: [
      { type: "body-moderator", body: "Press & Media" }
    ]
  },
  "sanskriti-sharma": {
    id: "sanskriti-sharma",
    name: "Sanskriti Sharma",
    assignments: [
      { type: "body-member", body: "Press & Media" }
    ]
  },
  "sundar-hembrom": {
    id: "sundar-hembrom",
    name: "Sundar Hembrom",
    assignments: [
      { type: "body-member", body: "Press & Media" }
    ]
  },
  "rishu-kumar-singh": {
    id: "rishu-kumar-singh",
    name: "Rishu Kumar Singh",
    assignments: [
      { type: "body-moderator", body: "Digital Desk" },
      { type: "sparkling-span", role: "Editor, Designing" }
    ]
  },
  "ritik-gorasawe": {
    id: "ritik-gorasawe",
    name: "Ritik Gorasawe",
    assignments: [
      { type: "body-member", body: "Digital Desk" }
    ]
  },
  "sartaj-fatima": {
    id: "sartaj-fatima",
    name: "Sartaj Fatima",
    assignments: [
      { type: "body-member", body: "Digital Desk" }
    ]
  },
  "sabiha-firdaus": {
    id: "sabiha-firdaus",
    name: "Sabiha Firdaus",
    assignments: [
      { type: "sparkling-span", role: "Editor, Urdu" }
    ]
  }
};
