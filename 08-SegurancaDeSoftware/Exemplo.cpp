//Exemplo de criptografia de senha
#include <iostream>
#include <string>
#include <openssl/sha.h>
#include <openssl/rand.h>

std::string generateSalt(int length) {
    std::string salt;
    salt.resize(length);

    RAND_bytes((unsigned char*)&salt[0], length);

    return salt;
}

std::string generateHash(std::string password, std::string salt) {
    std::string saltedPassword = salt + password;
    unsigned char hash[SHA256_DIGEST_LENGTH];
    SHA256((unsigned char*)saltedPassword[0], saltedPassword.length(), hash);

    char hexHash[SHA256_DIGEST_LENGTH * 2 + 1];
    for (int i = 0; i < SHA256_DIGEST_LENGTH; i++) {
        sprintf(hexHash + i * 2, "%02x", hash[i]);
    }

    return std::string(hexHash);
}

int main() {
    std::string password = "myPassword";
    std::string salt = generateSalt(16);
    std::string hashedPassword = generateHash(password, salt);

    std::cout << "Salt: " << salt << std::endl;
    std::cout <<  "Hashed Password: " << hashedPassword << std::endl;

    return 0;
}

