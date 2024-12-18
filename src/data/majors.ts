export interface Major {
  name: string;
  category: string;
}

export const majors: Major[] = [
  // College of Arts & Sciences
  { name: "Psychology", category: "Arts & Sciences" },
  { name: "Biology/Biological Sciences", category: "Arts & Sciences" },
  { name: "Liberal Arts and Sciences", category: "Arts & Sciences" },
  { name: "Political Science and Government", category: "Arts & Sciences" },
  { name: "Rhetoric and Composition", category: "Arts & Sciences" },
  { name: "English Language and Literature", category: "Arts & Sciences" },
  { name: "Biochemistry", category: "Arts & Sciences" },
  { name: "Spanish Language and Literature", category: "Arts & Sciences" },
  { name: "Sociology", category: "Arts & Sciences" },
  { name: "Anthropology", category: "Arts & Sciences" },
  { name: "Economics", category: "Arts & Sciences" },
  { name: "History", category: "Arts & Sciences" },
  { name: "Chemistry", category: "Arts & Sciences" },
  { name: "Mathematics", category: "Arts & Sciences" },
  { name: "Philosophy", category: "Arts & Sciences" },
  { name: "Geography", category: "Arts & Sciences" },
  { name: "Physics", category: "Arts & Sciences" },
  { name: "Astrophysics", category: "Arts & Sciences" },
  { name: "Geology/Earth Science", category: "Arts & Sciences" },
  { name: "Statistics", category: "Arts & Sciences" },
  { name: "Linguistics", category: "Arts & Sciences" },
  { name: "Russian Language and Literature", category: "Arts & Sciences" },
  { name: "French Language and Literature", category: "Arts & Sciences" },
  { name: "German Language and Literature", category: "Arts & Sciences" },
  { name: "Portuguese Language and Literature", category: "Arts & Sciences" },
  { name: "Classics and Classical Languages", category: "Arts & Sciences" },
  { name: "Religion/Religious Studies", category: "Arts & Sciences" },
  { name: "Humanities/Humanistic Studies", category: "Arts & Sciences" },

  // School of Engineering
  { name: "Mechanical Engineering", category: "Engineering" },
  { name: "Civil Engineering", category: "Engineering" },
  { name: "Electrical and Electronics Engineering", category: "Engineering" },
  { name: "Chemical Engineering", category: "Engineering" },
  { name: "Computer Engineering", category: "Engineering" },
  { name: "Nuclear Engineering", category: "Engineering" },
  { name: "Engineering Science", category: "Engineering" },

  // Anderson School of Management
  { name: "Business Administration and Management", category: "Business" },

  // School of Medicine & Health Sciences
  { name: "Registered Nursing", category: "Medicine & Health Sciences" },
  { name: "Pre-Medicine Studies", category: "Medicine & Health Sciences" },
  { name: "Public Health Education", category: "Medicine & Health Sciences" },
  { name: "Dental Hygiene", category: "Medicine & Health Sciences" },
  { name: "Emergency Medical Technology", category: "Medicine & Health Sciences" },
  { name: "Medical Radiologic Technology", category: "Medicine & Health Sciences" },
  { name: "Clinical/Medical Laboratory Technology", category: "Medicine & Health Sciences" },
  { name: "Pharmaceutics and Drug Design", category: "Medicine & Health Sciences" },
  { name: "Audiology and Speech-Language Pathology", category: "Medicine & Health Sciences" },

  // School of Architecture & Planning
  { name: "Architecture", category: "Architecture & Planning" },
  { name: "Environmental Design/Architecture", category: "Architecture & Planning" },

  // College of Education
  { name: "Elementary Education and Teaching", category: "Education" },
  { name: "Secondary Education and Teaching", category: "Education" },
  { name: "Special Education and Teaching", category: "Education" },
  { name: "Physical Education Teaching", category: "Education" },
  { name: "Health Teacher Education", category: "Education" },
  { name: "Educational/Instructional Technology", category: "Education" },
  { name: "Music Teacher Education", category: "Education" },
  { name: "Art Teacher Education", category: "Education" },

  // College of Fine Arts
  { name: "Film/Cinema/Video Studies", category: "Fine Arts" },
  { name: "Art/Art Studies", category: "Fine Arts" },
  { name: "Music Performance", category: "Fine Arts" },
  { name: "Drama and Theatre Arts", category: "Fine Arts" },
  { name: "Dance", category: "Fine Arts" },
  { name: "Technical Theatre/Theatre Design", category: "Fine Arts" },
  { name: "Art History, Criticism and Conservation", category: "Fine Arts" },
  { name: "Visual and Performing Arts", category: "Fine Arts" },

  // Computer & Information Sciences
  { name: "Computer and Information Sciences", category: "Technology" },

  // Interdisciplinary & Cultural Studies
  { name: "International/Global Studies", category: "Cultural & Global Studies" },
  { name: "Women's Studies", category: "Cultural & Global Studies" },
  { name: "American Indian/Native American Studies", category: "Cultural & Global Studies" },
  { name: "Hispanic-American and Chicano Studies", category: "Cultural & Global Studies" },
  { name: "East Asian Studies", category: "Cultural & Global Studies" },
  { name: "American/United States Studies", category: "Cultural & Global Studies" },
  { name: "African-American/Black Studies", category: "Cultural & Global Studies" },
  { name: "Latin American Studies", category: "Cultural & Global Studies" },
  { name: "Multi-/Interdisciplinary Studies", category: "Cultural & Global Studies" },

  // Environmental & Life Sciences
  { name: "Environmental Science", category: "Environmental Sciences" },
  { name: "Foods, Nutrition, and Wellness Studies", category: "Environmental Sciences" },
  { name: "Family and Consumer Sciences", category: "Environmental Sciences" }
];

export const categories = Array.from(new Set(majors.map(major => major.category))).sort();