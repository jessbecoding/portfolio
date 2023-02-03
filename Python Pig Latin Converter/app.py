def pigLatin():
    ay = "ay"
    yay = "yay"
    newSentence = []
    original = input("""
Please enter an English word or phrase: """)

    if all(character.isalpha() or character.isspace() for character in original):
        original = original.split()
        for word in original:
            firstLetter = word[0]
            if firstLetter in ["a", "e", "i", "o", "u"]:
                newWord = word + yay
                newSentence.append(newWord)
            else:
                newWord = word[1:] + word[0] + ay
                newSentence.append(newWord)
        newSentence = " ".join(newSentence)
        print(newSentence)
    else:
        invalidMenu = input("""
Invalid entry. Enter 1 to quit or 2 to continue. """)
        if invalidMenu == "1":
            quit
        elif invalidMenu == "2":
            pigLatin()

pigLatin()