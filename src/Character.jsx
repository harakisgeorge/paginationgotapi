import React from "react";

export const Character = ({ character }) => {
  return (
    <div className="character">
      <div className="character-text">
        {character.firstName} {character.lastName}
      </div>
      <img
        className="character-image"
        alt="character"
        src={character.imageUrl}
      />
    </div>
  );
};