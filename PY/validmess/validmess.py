def is_valid_message(message, validation):
    words = message.split(" ")

    # Word count must match validation length
    if len(words) != len(validation):
        return False

    # Compare each first letter
    for i in range(len(words)):
        if words[i][0].lower() != validation[i].lower():
            return False

    return message  # ✅ return the message if valid


print(is_valid_message("Hello World Again", "HWA"))
# "Hello World Again"

print(is_valid_message("big brown bear", "bbb"))
# "big brown bear"

print(is_valid_message("Wrong Example Here", "WEXZ"))
# False
