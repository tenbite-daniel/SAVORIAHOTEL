import time
from collections import defaultdict
from fastapi import HTTPException, status


GLOBAL_RATE_LIMIT = 12
GLOBAL_TIME_WINDOW_SECONDS = 60

user_requests = defaultdict(list)


def apply_rate_limit(key: str):
    user_id = "global_unauthenticated_user"
    current_time = time.time()

    user_requests[user_id] = [
        t for t in user_requests[user_id] if t > current_time - GLOBAL_TIME_WINDOW_SECONDS
    ]

    if len(user_requests[user_id]) >= GLOBAL_RATE_LIMIT:
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail="Too many requests. Please try again later.",
        )
    else:
        current_usage = len(user_requests[user_id])
        print(f"User {user_id}: {current_usage + 1}/{GLOBAL_RATE_LIMIT} requests used.")

    user_requests[user_id].append(current_time)
    return True