import os

ADMIN_ADDRESS = ""
ORACLE_PROXY_ADDRESS = (
    "0x04a05a68317edb37d34d29f34193829d7363d51a37068f32b142c637e43b47a2"
)
PUBLISHER_REGISTRY_ADDRESS = (
    "0x03fa3e2ab89cde72303dc45e2fc46d57751dbb8e5cc8d0d5e3599293d46d8361"
)
NETWORK = "testnet"

if __name__ == "__main__":
    if os.environ.get("ORACLE_PROXY_ADDRESS") is None:
        os.environ["ORACLE_PROXY_ADDRESS"] = ORACLE_PROXY_ADDRESS

    if os.environ.get("PUBLISHER_REGISTRY_ADDRESS") is None:
        os.environ["PUBLISHER_REGISTRY_ADDRESS"] = PUBLISHER_REGISTRY_ADDRESS

    if os.environ.get("NETWORK") is None:
        os.environ["NETWORK"] = NETWORK
