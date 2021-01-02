const data = require("./input4");

const passports = data
  .split("\n\n")
  .map((passport) => passport.split("\n").flatMap((line) => line.split(" ")));

const validPassportAmount = passports.filter((passport) => {
  return (
    passport.some(
      (field) =>
        field.includes("byr") &&
        Number(field.slice(4)) >= 1920 &&
        Number(field.slice(4)) <= 2002
    ) &&
    passport.some(
      (field) =>
        field.includes("iyr") &&
        Number(field.slice(4)) >= 2010 &&
        Number(field.slice(4)) <= 2020
    ) &&
    passport.some(
      (field) =>
        field.includes("eyr") &&
        Number(field.slice(4)) >= 2020 &&
        Number(field.slice(4)) <= 2030
    ) &&
    passport.some(
      (field) =>
        field.includes("hgt") &&
        ((field.slice(7) === "cm" &&
          Number(field.slice(4, 7)) >= 150 &&
          Number(field.slice(4, 7)) <= 193) ||
          (field.slice(6) === "in" &&
            Number(field.slice(4, 6)) >= 59 &&
            Number(field.slice(4, 6)) <= 76))
    ) &&
    passport.some(
      (field) => field.includes("hcl") && /^#[0-9a-f]{6}$/.test(field.slice(4))
    ) &&
    passport.some(
      (field) =>
        field.includes("ecl") &&
        (field.slice(4) === "amb" ||
          field.slice(4) === "blu" ||
          field.slice(4) === "brn" ||
          field.slice(4) === "gry" ||
          field.slice(4) === "grn" ||
          field.slice(4) === "hzl" ||
          field.slice(4) === "oth")
    ) &&
    passport.some(
      (field) => field.includes("pid") && /^[0-9]{9}$/.test(field.slice(4))
    )
  );
}).length;

console.log(validPassportAmount);
