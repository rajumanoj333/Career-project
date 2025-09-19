-- USERS (students, parents, mentors, admins)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role VARCHAR(50) NOT NULL, -- student | parent | mentor | admin
  full_name TEXT,
  profile JSONB,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- ASSESSMENTS (psychometric, skills, interest)
CREATE TABLE assessments (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR(50), -- psychometric | skills | interest
  responses JSONB,
  results JSONB,
  status VARCHAR(50), -- pending | completed
  started_at TIMESTAMP,
  completed_at TIMESTAMP
);

-- CAREER PROFILES (AI-generated persona + roadmap base)
CREATE TABLE career_profiles (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  assessment_id INT REFERENCES assessments(id),
  persona TEXT,
  riasec_scores JSONB,
  confidence_score FLOAT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- CAREER ROADMAPS (steps/milestones toward career)
CREATE TABLE career_roadmaps (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  career_profile_id INT REFERENCES career_profiles(id),
  milestones JSONB, -- [{"step": "Complete AI course", "status": "done"}]
  timeline JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- MENTORS (linked to user account with role = mentor)
CREATE TABLE mentors (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  expertise JSONB, -- ["AI", "Software Engineering"]
  experience_years INT,
  rating FLOAT DEFAULT 0,
  availability JSONB,
  joined_at TIMESTAMP DEFAULT NOW()
);

-- AVAILABILITY SLOTS (for mentor scheduling)
CREATE TABLE availability_slots (
  id SERIAL PRIMARY KEY,
  mentor_id INT REFERENCES mentors(id) ON DELETE CASCADE,
  start_time TIMESTAMP,
  end_time TIMESTAMP,
  is_booked BOOLEAN DEFAULT FALSE
);

-- MENTORSHIP SESSIONS (bookings between student & mentor)
CREATE TABLE mentorship_sessions (
  id SERIAL PRIMARY KEY,
  student_id INT REFERENCES users(id) ON DELETE CASCADE,
  mentor_id INT REFERENCES mentors(id) ON DELETE CASCADE,
  slot_id INT REFERENCES availability_slots(id),
  scheduled_at TIMESTAMP,
  duration INT, -- minutes
  status VARCHAR(50), -- booked | completed | cancelled
  notes JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- SCHOLARSHIPS (financial aid database)
CREATE TABLE scholarships (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  provider TEXT,
  eligibility JSONB,
  amount NUMERIC,
  deadline DATE,
  url TEXT
);

-- FINANCIAL PLANS (student-specific planning & ROI)
CREATE TABLE financial_plans (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  career_roadmap_id INT REFERENCES career_roadmaps(id),
  estimated_cost NUMERIC,
  estimated_roi NUMERIC, -- e.g. salary projection / cost
  scholarships JSONB, -- matched scholarships
  created_at TIMESTAMP DEFAULT NOW()
);
