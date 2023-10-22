package com.loandemo.loandemo.response;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class JsonResponse {
    private boolean success;
    private Object result;

    private JsonResponse() {
    }

    public static JsonResponse getSuccessResponse(Object result) {
        JsonResponse jsonResponse = new JsonResponse();
        Logger log = LoggerFactory.getLogger(JsonResponse.class);
        log.info("Received object: {} ", result);
        jsonResponse.setResult(result);
        jsonResponse.setSuccess(true);
        return jsonResponse;
    }

    public static JsonResponse getFailureResponse(String message) {
        JsonResponse jsonResponse = new JsonResponse();
        jsonResponse.setSuccess(false);
        jsonResponse.setResult(message);
        return jsonResponse;
    }

    public static JsonResponse getDoneResponse() {
        return getSuccessResponse("done");
    }

    public boolean isSuccess() {
        return this.success;
    }

    public Object getResult() {
        return this.result;
    }

    public void setSuccess(final boolean success) {
        this.success = success;
    }

    public void setResult(final Object result) {
        this.result = result;
    }

    public boolean equals(final Object o) {
        if (o == this) {
            return true;
        } else if (!(o instanceof JsonResponse)) {
            return false;
        } else {
            JsonResponse other = (JsonResponse)o;
            if (!other.canEqual(this)) {
                return false;
            } else if (this.isSuccess() != other.isSuccess()) {
                return false;
            } else {
                Object this$result = this.getResult();
                Object other$result = other.getResult();
                if (this$result == null) {
                    if (other$result != null) {
                        return false;
                    }
                } else if (!this$result.equals(other$result)) {
                    return false;
                }

                return true;
            }
        }
    }

    protected boolean canEqual(final Object other) {
        return other instanceof JsonResponse;
    }

    public int hashCode() {
        boolean PRIME = true;
        int result = 1;
        result = result * 59 + (this.isSuccess() ? 79 : 97);
        Object $result = this.getResult();
        result = result * 59 + ($result == null ? 43 : $result.hashCode());
        return result;
    }

    public String toString() {
        return "JsonResponse(success=" + this.isSuccess() + ", result=" + this.getResult() + ")";
    }
}
