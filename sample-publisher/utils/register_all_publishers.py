import asyncio
import os

from pontis.admin.client import PontisAdminClient

publishers = [
    "pontis-coinapi",
    "pontis-coinmarketcap",
    "pontis-coingecko",
    "pontis-coinbase",
    "pontis-gemini",
    "pontis-binance",
    "pontis-ftx",
]
publisher_address = int(os.environ.get("PUBLISHER_ADDRESS"))


async def main():
    admin_private_key = int(os.environ.get("ADMIN_PRIVATE_KEY"))
    admin_client = PontisAdminClient(
        admin_private_key,
    )
    for publisher in publishers:
        await admin_client.register_publisher_if_not_registered(
            publisher, publisher_address
        )


if __name__ == "__main__":

    asyncio.run(main())
