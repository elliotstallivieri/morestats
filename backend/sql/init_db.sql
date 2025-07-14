-- Drop existing tables (if resetting)
DROP TABLE IF EXISTS
    first_blood,
    player_game,
    game,
    edition,
    competition,
    team,
    player,
    champion,
    gold_diff_by_minute,
    pick_order,
    bans
CASCADE;


-- Enable UUID support
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: competition
CREATE TABLE competition (
    id UUID PRIMARY KEY,
    name VARCHAR(15) UNIQUE NOT NULL
);

-- Table: edition
CREATE TABLE edition (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    year INTEGER NOT NULL,
    competition_id UUID REFERENCES competition(id),
    split VARCHAR(50),
    name VARCHAR NOT NULL
);

-- Table: team
CREATE TABLE team (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) UNIQUE NOT NULL
);

-- Table: player
CREATE TABLE player (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    team_id UUID REFERENCES team(id),
    role VARCHAR(10)
);

-- Table: champion
CREATE TABLE champion (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    icon VARCHAR(250),
    picture VARCHAR(250)
);

-- Table: game
CREATE TABLE game (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    date VARCHAR,
    competition UUID REFERENCES competition(id),
    team_blue UUID REFERENCES team(id),
    team_red UUID REFERENCES team(id),
    winner BOOLEAN,
    patch VARCHAR(20),
    game_duration INTEGER
);

-- Table: player_game
CREATE TABLE player_game (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    game_id UUID REFERENCES game(id),
    team_side VARCHAR(4) NOT NULL,
    role VARCHAR NOT NULL,
    player_id UUID REFERENCES player(id),
    champion_id UUID REFERENCES champion(id),
    ennemy_champion_id UUID REFERENCES champion(id),
    gold_earned INTEGER,
    gold_diff_10 INTEGER,
    gold_diff_15 INTEGER,
    gold_diff_20 INTEGER,
    gold_diff_25 INTEGER,
    gold_diff_30 INTEGER,
    kda_k INTEGER,
    kda_d INTEGER,
    kda_a INTEGER,
    damage_dealt INTEGER,
    first_to_6 BOOLEAN
);

-- Table: first_blood
CREATE TABLE first_blood (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    game_id UUID REFERENCES game(id),
    killing_player_side INTEGER,
    killing_player_id UUID REFERENCES player(id),
    killed_player_id UUID REFERENCES player(id),
    time INTEGER
);


CREATE TABLE gold_diff_by_minute (
    id UUID PRIMARY KEY,
    game_id UUID REFERENCES game(id) ON DELETE CASCADE,
    minute INTEGER CHECK (minute IN (8, 14, 20, 25, 30)),
    position VARCHAR(3) CHECK (position IN ('top', 'jgl', 'mid', 'adc', 'sup')),
    gold_diff INTEGER
);

CREATE TABLE pick_order (
    id SERIAL PRIMARY KEY,
    game_id UUID REFERENCES game(id) ON DELETE CASCADE,
    player_id UUID REFERENCES player(id) ON DELETE CASCADE,
    pick_position INTEGER CHECK (pick_position BETWEEN 0 AND 9),
    team_side INTEGER CHECK (team_side IN (0, 1)), -- 0 = blue, 1 = red
    champion_name VARCHAR NOT NULL
);

CREATE TABLE bans (
    id SERIAL PRIMARY KEY,
    game_id UUID REFERENCES game(id) ON DELETE CASCADE,
    team_side INTEGER CHECK (team_side IN (0, 1)), -- 0 = blue, 1 = red
    --ban_position INTEGER CHECK (ban_position BETWEEN 1 AND 5),
    champion_id UUID REFERENCES champion(id) ON DELETE CASCADE,
    champion_name VARCHAR NOT NULL
);

/*
    

*/

